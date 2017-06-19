import React from 'react'


const Note = (props) => {


    const selectNote = (ev) => {

        // console.log(ev.currentTarget)
        // const title = ev.currentTarget.querySelector('.note-title').textContent
        // const body = ev.currentTarget.querySelector('.note-body p').textContent
        props.activeNote(props.note)
     }

    return (
        <li className="listItem" onClick={selectNote}>
        <div className="note">
            <div className="note-title">
            {props.note.title}
            </div>
            <div className="note-body">
            <p>
                {props.note.body}
            </p>
            </div>
        </div>
        </li>
    )
}   




export default Note