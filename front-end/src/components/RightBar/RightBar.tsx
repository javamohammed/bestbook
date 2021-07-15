import './RightBar.css'
import Online from "../Online/Online";
import { Users } from "../../dummyData";
export default function RightBar(): JSX.Element{
    return (
        <div className="right-bar">
            <div className="right-bar-wrapper">
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
            </div>
        </div>
    )
}
