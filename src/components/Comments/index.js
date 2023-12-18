import {Component} from 'react'

import './index.css'

class Comments extends Component {
  state = {Comment: ''}

  render() {
    const {Comment} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="Comment-container">
          <div>
            <p className="para">Say something about 4.0 Technologies</p>
            <form className="form-container">
              <input
                type="text"
                placeholder="Your Name"
                className="text-Input"
              />
              <textarea
                type="text"
                rows="6"
                cols="20"
                placeholder="Your Comment"
                className="textArea-Input"
              >
                {Comment}
              </textarea>
              <button type="submit" className="Comment-Btn">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="image"
            alt="comments"
          />
        </div>
      </div>
    )
  }
}
export default Comments
