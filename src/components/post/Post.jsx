import './post.css'
import {
  MoreVert
} from "@mui/icons-material"

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="src/assets/person/1.jpeg" alt="" className="postProfileImg" />
            <span className="postUserName">Syed Mehandi Raza</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! its my first post:) </span>
          <img src="src/assets/post/1.jpeg" alt="" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="src/assets/like.png" alt="" className="likeIcon" />
            <img src="src/assets/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">32 people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
