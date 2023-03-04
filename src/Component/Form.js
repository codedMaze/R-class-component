import React, { Component } from 'react'

class Form extends Component {
constructor(props) {
  super(props)

  this.state = {
     username: '',
     comments: '',
     topic: 'react'
  }
}

handlerUsername = event =>{
    this.setState({
        username: event.target.value
    })
}

handlerComments = evemt =>{
    this.setState({
        comments: evemt.target.value
    })
}

handlerTopic = evemt =>{
    this.setState({
        topic: evemt.target.value
    })
}

handlerSubmit = event =>{
    event.preventDefault()
    alert(`${this.state.comments} ${this.state.username} ${this.state.topic}`)
}

  render() {
    const {username, comments, topic} = this.state;
    return (
      <div>
        <form onSubmit={this.handlerSubmit}>
            <label>User name</label>
            <input type="text" value={username} onChange ={this.handlerUsername} ></input>
            <div>
                <label>Comments</label>
                <textarea value={comments} onChange = {this.handlerComments}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value = {topic} onChange={this.handlerTopic}>
                    <option value = 'react'>React</option>
                    <option value = 'vue'>Vue</option>
                    <option value = 'angular'>Angular</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
