import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

import './index.css'

class Comments extends Component {
  state = {Comment: '', count: 0, CommentList: [], name: ''}

  likedComment = id => {
    this.setState(prevState => ({
      CommentList: prevState.CommentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      CommentList: prevState.CommentList.filter(
        eachComment => eachComment.id !== id,
      ),
      count: prevState.count - 1,
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {Comment, name} = this.state

    const newComment = {
      id: uuidv4(),
      name,
      Comment,
      date: formatDistanceToNow(new Date()),
      isLiked: false,
    }
    this.setState(prevState => ({
      CommentList: [...prevState.CommentList, newComment],
      count: prevState.count + 1,
      name: '',
      Comment: '',
    }))
  }

  onTypeName = event => {
    this.setState({name: event.target.value})
  }

  onTypeComment = event => {
    this.setState({Comment: event.target.value})
  }

  render() {
    const {Comment, count, name, CommentList} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="Comment-container">
          <div>
            <p className="para">Say something about 4.0 Technologies</p>
            <form className="form-container" onSubmit={this.onAddComment}>
              <input
                type="text"
                placeholder="Your Name"
                className="text-Input"
                value={name}
                onChange={this.onTypeName}
              />
              <textarea
                type="text"
                rows="6"
                cols="20"
                value={Comment}
                placeholder="Your Comment"
                className="textArea-Input"
                onChange={this.onTypeComment}
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
        <hr className="horizontal-line" />
        <p className="para">
          <span className="span-El">{count}</span> Comments
        </p>
        <ul>
          {CommentList.map(eachComment => (
            <CommentItem
              commentItem={eachComment}
              key={eachComment.id}
              likedComment={this.likedComment}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments

