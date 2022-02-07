import { useContext} from "react";
//import Topbar from "../../components/Topbar/topbar";
import Sidebar from "../../components/Sidebar/sidebar";
import Feed from "../../components/Feeds/feeds";
import Rightbar from "../../components/Rightbar/rightbar";
import { AuthContext } from "../../context/AuthContext";
import "./home.css"

export default function Home() {

  const { user } = useContext(AuthContext);
 
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