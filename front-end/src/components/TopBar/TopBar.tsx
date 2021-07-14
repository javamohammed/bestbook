
import {Search, Person, Notifications, Chat} from '@material-ui/icons';
import "./TopBar .css"
export default function TopBar(): JSX.Element{
    return <div className="top-bar-container">
                <div className="top-bar-left">
                    <span className="logo">
                        <img className="top-bar-left-logo" src="/assets/bestbook.png" alt="" />
                    </span>
                </div>
                <div className="top-bar-center">
                    <div className="search-bar">
                        <Search  className="search-icon"/>
                        <input type="text" placeholder="Search for friend, post or video" className="search-input" />
                    </div>
                </div>
                <div className="top-bar-right">
                    <div className="top-bar-links">
                        <span className="top-bar-link">Homepage</span>
                        <span className="top-bar-link">Timeline</span>
                    </div>
                    <div className="top-bar-icons">
                        <div className="top-bar-icon-item">
                            <Person />
                            <span className="top-bar-icon-badge">1</span>
                        </div>
                        <div className="top-bar-icon-item">
                            <Chat />
                            <span className="top-bar-icon-badge">2</span>
                        </div>
                        <div className="top-bar-icon-item">
                            <Notifications />
                            <span className="top-bar-icon-badge">1</span>
                        </div>
                    </div>
                    <img src="/assets/person/1.jpg" alt="" className="top-bar-img"/>
                </div>
            </div>
}