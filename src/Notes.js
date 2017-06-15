import React from 'react'

const Notes = (props) => {
    return (
        <li>
            <div className="note">
                <div className="note-title">
                    {props.noteInfo.title}    
                </div>
                <div className="note-body">
                    <p>{props.noteInfo.text}</p>
                </div>
            </div>
        </li>
    )
}

export default Notes