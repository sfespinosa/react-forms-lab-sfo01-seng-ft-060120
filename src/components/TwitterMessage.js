import React from "react";

class TwitterMessage extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     message: "",
  //     remainingChars: ""
  //   };
  // }

  state = {
    message: "",
    remainingChars: this.props.maxChars
  }

  handleChange = e => {
    let newMessage = e.target.value
    this.setState({
        message: newMessage, 
        remainingChars: this.props.maxChars - (newMessage.length)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={(e) => this.handleChange(e)}/><br/>
        <strong>Characters Remaining: {this.state.remainingChars}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
