import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import base from './base'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {},
      activeNote: {},
    }

    base.syncState(
      'notes',
      {
        context: this,
        state: 'notes'
      }
    )
  }

  storeActiveNote = (note) => {
    this.setState({activeNote : note})
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
        <Main notes={this.state.notes} saveNote={this.saveNote} storeActiveNote={this.storeActiveNote} activeNote={this.state.activeNote}/>
      </div>
    );
  }
}

export default App;