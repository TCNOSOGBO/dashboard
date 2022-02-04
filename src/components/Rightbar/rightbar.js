import "./rightbar.css";
//import { Users } from "../../dummyData";
//import Online from "../Online/online";
//import {useState, useEffect} from 'react'
//import axios from "axios"

export default function Rightbar({  user }) {
  

  return (
    <>
     <div className="rightbar">
      <div className="rightbarWrapper">
      <h4 className="rightbarTitle">Profile</h4>
      <div className="rightbarFollowing">
          <img
            src={ user.profilePicture ?`assets/${user.profilePicture}`: "assets/noAvatar.png"}
            alt=""
            className="rightbarFollowingImg"
          />
      </div>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Full Name:</span>
          <span className="rightbarInfoValue">{user.firstName} {user.lastName}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Username:</span>
          <span className="rightbarInfoValue">{user.username}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Department:</span>
          <span className="rightbarInfoValue">{user.department}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Office:</span>
          <span className="rightbarInfoValue">{user.office}</span>
        </div>
      </div>
      </div>
      </div>
      </>
      )

  }
 /*
  const HomeRightbar = () => {
     
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">Profile</h4>
        <div className="rightbarFollowing">
            <img
              src="assets/person1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
        </div>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Full Name:</span>
            <span className="rightbarInfoValue">John Carter</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Username:</span>
            <span className="rightbarInfoValue">johnny</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Department:</span>
            <span className="rightbarInfoValue">ICT</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Office:</span>
            <span className="rightbarInfoValue">Manager</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
        
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {<ProfileRightbar />}
      </div>
    </div>
  );
}
*/
