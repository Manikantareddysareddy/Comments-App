const CommentItem = props => {
  const {commentItem, likedComment, deleteComment} = props
  const {name, Comment, isLiked, date, id} = commentItem

  const likeParaClassName = isLiked ? 'new-liked-para' : 'liked-para'
  const likedImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const commentLiked = () => {
    likedComment(id)
  }

  const commentDelete = () => {
    deleteComment(id)
  }
  console.log(date)
  return (
    <li className="list-container">
      <div className="top-container">
        <h1 className="icon">{name[0]}</h1>
        <div>
          <div>
            <h1 className="heading1">
              {name} <span className="date-para">{date}</span>
            </h1>
          </div>
          <p className="para1">{Comment}</p>
        </div>
      </div>
      <div className="liked-container">
        <div className="like-container">
          <div>
            <img src={likedImage} alt="like" className="like-image" />
          </div>
          <button type="button" className="btn1" onClick={commentLiked}>
            <p className={`liked-para ${likeParaClassName}`}>Like</p>
          </button>
        </div>
        <button
          data-testid="delete"
          type="button"
          className="btn1"
          onClick={commentDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
