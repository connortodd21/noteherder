import React, {Component} from 'react'
import './NoteForm.css'

class NoteForm extends Component {
  constructor(props){
    super(props)
      this.state = {
          title: '',
          text: '',
      }
    
    this.handleTitle = this.handleTitle.bind(this)
    this.handleText = this.handleText.bind(this)
  }

  handleTitle(ev){
    this.setState({
      title : ev.target.value
    })
  }

  handleText(ev){
    this.setState({
      text: ev.target.value
    })
  }

  render() {
    return (
      <div className="NoteForm">
        <form>
          <p>
            <input 
              type="text" 
              name="title" 
              placeholder="Title your note" 
              value={this.state.title} 
              onChange={this.handleTitle}
            />
          </p>
          <p>
            <textarea 
              name="body" 
              cols="30" 
              rows="10" 
              placeholder="Just start typing..." 
              value={this.state.text} 
              onChange={this.handleText}
            >
            </textarea>
          </p>
        </form>
      </div>

    )
  }
}
export default NoteForm