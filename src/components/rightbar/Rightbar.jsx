import './rightbar.css'
import {Users} from "../../../dummyData.js"
import Online from "../online/Online.jsx"

function Rightbar({profile}) {

  const HomeRightbar = () => {
    return(
      <>
         <div className="birthdayContainer">
          <img src="src/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Zair</b > and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="src/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return(
      <>
        <h4 className="rightbarTitle">UserInformation</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">NeyYork</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friend</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="src/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       <ProfileRightbar />
      </div>
    </div>
  )
}

export default Rightbar
