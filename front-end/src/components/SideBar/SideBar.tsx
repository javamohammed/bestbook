import './SideBar.css'
import { RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from "@material-ui/icons";
export default function SideBar(): JSX.Element{
    return (
        <div className="side-bar">
            <div className="side-bar-wrapper">
                <ul className="side-bar-list">
                    <li className="side-bar-list-item">
                        <Chat className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Chats</span>
                    </li>
                    <li className="side-bar-list-item">
                        <PlayCircleFilledOutlined className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Videos</span>
                    </li>
                    <li className="side-bar-list-item">
                        <Group className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Groups</span>
                    </li>
                    <li className="side-bar-list-item">
                        <Bookmark className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Bookmarks</span>
                    </li>
                    <li className="side-bar-list-item">
                        <HelpOutline className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Questions</span>
                    </li>
                    <li className="side-bar-list-item">
                        <WorkOutline className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Jobs</span>
                    </li>
                    <li className="side-bar-list-item">
                        <Event className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Events</span>
                    </li>
                    <li className="side-bar-list-item">
                        <School className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Courses</span>
                    </li>
                </ul>
                <button className="side-bar-button">Show More</button>
                <hr className="side-bar-hr"/>
                <ul className="side-bar-friend-list">
                    <li className="side-bar-friend">
                        <img className="side-bar-friend-img" src="/assets/person/2.jpeg"  alt=""/>
                        <span className="side-bar-friend-name">Jane Doe</span>
                    </li>
                    <li className="side-bar-friend">
                        <img className="side-bar-friend-img" src="/assets/person/2.jpeg"  alt=""/>
                        <span className="side-bar-friend-name">Jane Doe</span>
                    </li>
                    <li className="side-bar-friend">
                        <img className="side-bar-friend-img" src="/assets/person/2.jpeg"  alt=""/>
                        <span className="side-bar-friend-name">Jane Doe</span>
                    </li>
                    <li className="side-bar-friend">
                        <img className="side-bar-friend-img" src="/assets/person/2.jpeg"  alt=""/>
                        <span className="side-bar-friend-name">Jane Doe</span>
                    </li>
                    <li className="side-bar-friend">
                        <img className="side-bar-friend-img" src="/assets/person/2.jpeg"  alt=""/>
                        <span className="side-bar-friend-name">Jane Doe</span>
                    </li>
                    <li className="side-bar-friend">
                        <img className="side-bar-friend-img" src="/assets/person/2.jpeg"  alt=""/>
                        <span className="side-bar-friend-name">Jane Doe</span>
                    </li>
                    <li className="side-bar-friend">
                        <img className="side-bar-friend-img" src="/assets/person/2.jpeg"  alt=""/>
                        <span className="side-bar-friend-name">Jane Doe</span>
                    </li>
                    <li className="side-bar-friend">
                        <img className="side-bar-friend-img" src="/assets/person/2.jpeg"  alt=""/>
                        <span className="side-bar-friend-name">Jane Doe</span>
                    </li>
                    <li className="side-bar-friend">
                        <img className="side-bar-friend-img" src="/assets/person/2.jpeg"  alt=""/>
                        <span className="side-bar-friend-name">Jane Doe</span>
                    </li>
                    <li className="side-bar-friend">
                        <img className="side-bar-friend-img" src="/assets/person/2.jpeg"  alt=""/>
                        <span className="side-bar-friend-name">Jane Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
