import './profile.css'

import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'

function Profile() {
  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar  />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src="src/assets/post/3.jpeg" alt="" className="profileCoverImg" />
              <img src="src/assets/person/7.jpeg" alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="ProfieInfoName">Syed Mehandi Raza</h4>
              <span className="profileInfoDesc">Hello my Friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed/>
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile

