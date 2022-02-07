import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios"
import {format} from 'timeago.js'

export default function Post({ post }) {
  const [like,setLike] = useState(post.likes.length)
  const [isLiked,setIsLiked] = useState(false)
  const [user, setUser] =useState({})

  const PF = process.env.REACT_APP_PUBLIC_URL
  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  useEffect(()=>{
    const fetchPosts = async()=>{
        const res = await axios.get(`https://tcnapp.herokuapp.com/api/users?userId=${post.userId}`)
        setUser(res.data)
    }
    fetchPosts()
  }, [post.userId])

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={`assets/${user.profilePicture}`}
              alt=""
            />
            <span className="postUsername">
              {user.username}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.content}</span>
          <img className="postImg" src={`assets/${post.image}`} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            {/*<img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />*/}
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          {/*
            <div className="postBottomRight">
              <span className="postCommentText">{post.comment} comments</span>
            </div>
          */}
        </div>
      </div>
    </div>
  );
}