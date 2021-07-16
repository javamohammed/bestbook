import TopBar from "../../components/TopBar/TopBar";
import Feed from "../../components/Feed/Feed";
import SideBar from "../../components/SideBar/SideBar";
import RightBar from "../../components/RightBar/RightBar";
import "./Profile.css"

export default  function Profile(): JSX.Element {
    return <>
            <TopBar/>
            <div className="profile">
                <SideBar />
                <div className="profile-right">
                     <div className="profile-right-top">
                         <div className="profile-cover">
                             <img src="/assets/post/3.jpeg" alt="" className="profile-cover-img" />
                             <img src="/assets/person/7.jpeg" alt="" className="profile-user-img" />
                         </div>
                         <div className="profile-info">
                             <h4 className="profile-info-name">Mohammed Aoulad Bouchta</h4>
                             <span className="profile-info-desc">Hello Everyone !!</span>
                         </div>
                     </div>
                    <div className="profile-right-bottom">
                        <Feed />
                        <RightBar profile />
                    </div>
                </div>
            </div>
        </>
} 