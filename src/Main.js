import React from 'react'


import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => {
  return (
    <div className="Main">
      <Sidebar />
      <NoteList notes={props.notes} activeNote={props.storeActiveNote}/>
      <NoteForm saveNote={props.saveNote} storeActiveNote={props.storeActiveNote} activeNote={props.activeNote}/>
    </div>
  )
}

export default Main