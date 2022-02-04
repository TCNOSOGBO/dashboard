import "./profile.css";
import Topbar from "../../components/Topbar/topbar";
import Sidebar from "../../components/Sidebar/sidebar";
import Feed from "../../components/Feeds/feeds";
import Rightbar from "../../components/Rightbar/rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}