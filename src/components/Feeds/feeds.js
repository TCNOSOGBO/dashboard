import {useState, useEffect} from "react"
import Post from "../Post/post";
import Share from "../Share/share";
import "./feeds.css";
//import { Posts } from "../../dummyData";
import axios from "axios"

export default function Feed() {
  const [posts, setPosts] = useState([])

useEffect(()=>{
  const fetch = async()=>{
      const res = await axios.get("http://localhost:8800/api/posts/all")
      setPosts(res.data)
  }
  fetch()
}, [])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts?.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}