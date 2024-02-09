import './post.css'
import { Users } from '../../../dummyData'
import {
  MoreVert
} from "@mui/icons-material"
import { useState } from 'react'

export default function Post({post}) {

  const [like, setLike] = useState(post.like)
  const [isliked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isliked ? like-1 : like+1);
    setIsLiked(!isliked)
  } 
 
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
            <span className="postUserName">{Users.filter((u) => u.id === post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc} </span>
          <img src={post.photo} alt="" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="src/assets/like.png" alt="" className="likeIcon" onClick={likeHandler} />
            <img src="src/assets/heart.png" alt="" className="likeIcon" onClick={likeHandler} />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
