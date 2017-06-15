import React, { Component } from 'react';

import './App.css';
import Main from './Main'

class App extends Component {
  constructor(props){
      super(props)
      this.state = {
        notes: {
          'note-1' : {
              id : 'note-1',
              title: 'Thoughts on React',
              body: 'React is pretty nifty. Declarative FtW!',
          },
          'note-2' : {
              id : 'note-2',
              title: 'State and props?',
              body: 'WAT',
          },
        }
      }
  }

  saveNote = (note) => {
    if(!note.id){
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[notes.id] = note
    this.setState({notes})
  }

  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes} saveNote={this.saveNote} />
      </div>
    );
  }
}

export default App;
