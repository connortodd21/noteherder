import React from 'react'
import './Sidebar.css'

import quill from './quill.svg'



const SideBar = () => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={quill} alt="Noteherder"/>
      </div>
      <button className="new-note" onClick={this.addNode}>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/new-hover.png" alt="New note"/>
        <img className="outline" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/new.png" alt="New note"/>
      </button>
      <span></span>
      
      <button className="delete-note" onClick={this.deleteNote}>
        <img src="https://image.flaticon.com/icons/svg/61/61795.svg" alt="Delete Note"/>
        <img className="outline" src="http://res.freestockphotos.biz/pictures/15/15107-illustration-of-a-red-close-button-pv.png" alt="Delete Note"/>
      </button>
    </div>
  )
}

export default SideBar