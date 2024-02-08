import './sidebar.css'
import {
  Bookmark, 
  Feed, 
  Group, 
  HelpOutline, 
  PlayCircleFilledOutlined, 
  RssFeed, 
  School, 
  WorkOutline} from '@mui/icons-material'
  import EventIcon from '@mui/icons-material/Event';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Feed className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Question</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/src/assets/person/2.jpeg" alt="" />John Doe
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/src/assets/person/2.jpeg" alt="" />John Doe
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/src/assets/person/2.jpeg" alt="" />John Doe
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/src/assets/person/2.jpeg" alt="" />John Doe
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/src/assets/person/2.jpeg" alt="" />John Doe
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/src/assets/person/2.jpeg" alt="" />John Doe
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/src/assets/person/2.jpeg" alt="" />John Doe
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/src/assets/person/2.jpeg" alt="" />John Doe
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/src/assets/person/2.jpeg" alt="" />John Doe
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/src/assets/person/2.jpeg" alt="" />John Doe
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/src/assets/person/2.jpeg" alt="" />John Doe
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/src/assets/person/2.jpeg" alt="" />John Doe
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/src/assets/person/2.jpeg" alt="" />John Doe
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/src/assets/person/2.jpeg" alt="" />John Doe
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/src/assets/person/2.jpeg" alt="" />John Doe
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/src/assets/person/2.jpeg" alt="" />John Doe
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar