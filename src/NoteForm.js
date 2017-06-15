import React, {Component} from 'react'
import './NoteForm.css'

class NoteForm extends Component {

  handleChanges = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    this.setState({note}, () => this.props.saveNote(this.state.note)) 
  }

  constructor(props){
    super(props)
      this.state = {
          note: this.blankNote()
      }
  }

  blankNote = () => {
    return{
      id : null,
      title: '',
      body: '',
    }
  }

    
    
  //   this.handleTitle = this.handleTitle.bind(this)
  //   this.handleText = this.handleText.bind(this)
  // }

  // handleTitle(ev){
  //   this.setState({
  //     title : ev.target.value
  //   })
  // }

  // handleText(ev){
  //   this.setState({
  //     text: ev.target.value
  //   })
  // }

  render() {
    return (
      <div className="NoteForm">
        <form>
          <p>
            <input 
              type="text" 
              name="title" 
              placeholder="Title your note" 
              value={this.state.note.title} 
              onChange={this.handleChanges}
            />
          </p>
          <p>
            <textarea 
              name="body" 
              cols="30" 
              rows="10" 
              placeholder="Just start typing..." 
              value={this.state.note.body} 
              onChange={this.handleChanges}
            >
            </textarea>
          </p>
        </form>
      </div>

    )
  }
}
export default NoteForm