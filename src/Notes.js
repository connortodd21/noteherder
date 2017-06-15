import React from 'react'

const Notes = ({ note }) => {
    

    return (
        <li> 
            <div className="note">
                <div className="note-title">
                    {note.title}
                </div>
                <div className="note-body">
                    <p>
                        {note.body}
                    </p>
                </div>
            </div>
        </li>
    )
}

export default Notes