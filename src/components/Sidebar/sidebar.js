import "./sidebar.css";
import {
  RssFeed,
  //Chat,
  PlayCircleFilledOutlined,
  Group,
  //Bookmark,
  //HelpOutline,
  //WorkOutline,
  Event,
  Home,
  Notifications,
  Collections,
  
  //Person,
  //Share
  //School,
} from "@material-ui/icons";
//import { Users } from "../../dummyData";
//import CloseFriend from "../CloseFriend/closeFriend";
import {useNavigate} from "react-router-dom"

export default function Sidebar() {
  const navigate = useNavigate()

  const logout = ()=>{
    navigate('/login')
    localStorage.removeItem('user')
  }


  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarLogo">
            <img className="tcnLogo" src="/assets/TCNLogo.jpg" alt="logo" />
        </div>
        <ul className="sidebarList">
            <li className="sidebarListItem">
                <Home className="sidebarIcon" />
                <span className="sidebarListItemText">Home</span>
            </li>
            <li className="sidebarListItem">
                <RssFeed className="sidebarIcon" />
                <span className="sidebarListItemText">Timeline</span>
            </li>
          {/*
            <li className="sidebarListItem">
                <Chat className="sidebarIcon" />
                <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
                <Bookmark className="sidebarIcon" />
                <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
                <HelpOutline className="sidebarIcon" />
                <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
                <School className="sidebarIcon" />
                <span className="sidebarListItemText">Courses</span>
            </li>
          */}
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Live Streaming</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Departments</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <Collections className="sidebarIcon" />
            <span className="sidebarListItemText">Gallery</span>
          </li>
          <li className="sidebarListItem">
            <Notifications className="sidebarIcon" />
            <span className="sidebarListItemText">Notifications</span>
          </li>
          {/*<li className="sidebarListItem">
            <Person className="sidebarIcon" />
            <span className="sidebarListItemText">Profile</span>
        </li>*/}
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Users</span>
          </li>
          <li onClick={logout} className="sidebarListItem">
            {/*<Login className="sidebarIcon" />*/}
            <span className="sidebarListItemText">Log out</span>
          </li>
        </ul>
        {/*<ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul> */}
      </div>
    </div>
  );
}
