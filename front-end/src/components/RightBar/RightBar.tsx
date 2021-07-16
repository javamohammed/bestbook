import './RightBar.css'
import Online from "../Online/Online";
import { Users } from "../../dummyData";
interface RightBarProps {
    profile?: boolean,
    home?: boolean
}
const  RightBar:React.FC<RightBarProps> = props  =>{

    let componentRightBar: JSX.Element = <></>;
    if(props.profile){
        componentRightBar = <>
            <h4 className="right-bar-title">User information</h4>
            <div className="right-bar-info">
                <div className="right-bar-info-item">
                    <span className="right-bar-info-key">City:</span>
                    <span className="right-bar-info-value">Tangier</span>
                </div>
                <div className="right-bar-info-item">
                    <span className="right-bar-info-key">Form:</span>
                    <span className="right-bar-info-value">Makkah</span>
                </div>
                <div className="right-bar-info-item">
                    <span className="right-bar-info-key">Relationship:</span>
                    <span className="right-bar-info-value">Married</span>
                </div>
            </div>
            <h4 className="right-bar-title">User Friends</h4>
            <div className="right-bar-followings">
                <div className="right-bar-following">
                    <img src="/assets/person/1.jpg" alt="" className="right-bar-following-img" />
                    <span className="right-bar-following-name">Lionel Messi</span>
                </div>
                <div className="right-bar-following">
                    <img src="/assets/person/2.jpeg" alt="" className="right-bar-following-img" />
                    <span className="right-bar-following-name">Ronalod</span>
                </div>
                <div className="right-bar-following">
                    <img src="/assets/person/3.jpg" alt="" className="right-bar-following-img" />
                    <span className="right-bar-following-name">Hakim Ziyach</span>
                </div>
                <div className="right-bar-following">
                    <img src="/assets/person/4.jpeg" alt="" className="right-bar-following-img" />
                    <span className="right-bar-following-name">Mehdi Bentia</span>
                </div><div className="right-bar-following">
                    <img src="/assets/person/5.jpg" alt="" className="right-bar-following-img" />
                    <span className="right-bar-following-name">Achraf Hakimi</span>
                </div>
            </div>
        </>
    }else if(props.home){
        componentRightBar = <>
            <div className="birthday-container">
                    <img src="/assets/gift.png" alt="" className="birthday-img" />
                    <span className="birthday-text">
                        <b>Hakim Ziyach</b> and <b>4 others friends</b> have a birthday today
                    </span>
                </div>
                <img src="/assets/ad.png" alt="" className="right-bar-ad" />
                <h4 className="right-bar-title">Online friends</h4>
                <ul className="right-bar-friend-list">
                    {Users.map(u => {
                        return <Online user = {u}/>
                    })}
                </ul>
        </>
    } 
    return (
        <div className="right-bar">
            <div className="right-bar-wrapper">
                {componentRightBar}
            </div>
        </div>
    )
}
export default  RightBar