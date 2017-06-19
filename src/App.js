import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import SignIn from './SignIn'
import SignOut from './SignOut'
import base, { auth } from './base'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {},
      activeNote: {},
      uid : null,
    }

    base.syncState(
      'notes',
      {
        context: this,
        state: 'notes'
      }
    )
  }


  componentWillMount() {
    auth.onAuthStateChanged(
      (user) => {
        if(user){
          this.authHandler(user)
        }
      }
    )
  }

  storeActiveNote = (note) => {
    this.setState({activeNote : note})
  }

  authHandler = (userData) => {
    this.setState({ uid : userData.uid }, this.syncNotes)
  }

  signedIn = () => {
    return this.state.uid;
  }

  signOut = () => {
    auth.signOut().then(() => 
      this.setState({uid : null}))
  }

  syncNotes = () => {
    base.syncState(
      `${this.state.uid}/notes`,
      {
        context: this,
        state: 'notes',
      }
    )
  }
  
  renderMain = () => {
    return (
      <div>
        <SignOut signOut = {this.signOut}/>
        <Main notes={this.state.notes} saveNote={this.saveNote} storeActiveNote={this.storeActiveNote} activeNote={this.state.activeNote}/>
      </div>
    )
  }

  saveNote = (note) => {
    if (!note.id) {
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[note.id] = note
    this.setState({ 
      notes,
      activeNote: note
    })
  }

  render() {
    return (
      <div className="App">
         { this.signedIn() ? this.renderMain() : <SignIn /> }
      </div>
    );
  }
}

export default App;