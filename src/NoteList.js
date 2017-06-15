import React from 'react'
import './NoteList.css'
import Notes from './Notes'


const NoteList = (props) => {

  return (
    <div className="NoteList">
        <h3>Notes</h3>
        <ul id="notes">
          {Object.keys(props.notes).map((noteID) => {
              return <Notes note={props.notes[noteID]} key={noteID} />
          }) }
        </ul>
      </div>
  )
}

export default NoteList
