import { useContext, useEffect} from "react";
import Topbar from "../../components/Topbar/topbar";
import Sidebar from "../../components/Sidebar/sidebar";
import Feed from "../../components/Feeds/feeds";
import Rightbar from "../../components/Rightbar/rightbar";
import { AuthContext } from "../../context/AuthContext";
import {useNavigate} from 'react-router-dom';
import "./home.css"

export default function Home() {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);

  useEffect(()=>{
    if(user === null){
      navigate('/')
    }
  })

  return (
    <>
      {/*<Topbar />*/}
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbar user={user}/>
      </div>
    </>
  );
}