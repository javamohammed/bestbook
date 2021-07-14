import './RightBar.css'

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
                    <li className="right-bar-friend">
                        <div className="right-bar-profile-img-container">
                            <img src="/assets/person/3.jpg" alt="" className="right-bar-profile-img" />
                            <span className="right-bar-online"></span>
                        </div>
                        <span className="right-bar-username">Marouane Chamakh</span>
                    </li> 
                    <li className="right-bar-friend">
                        <div className="right-bar-profile-img-container">
                            <img src="/assets/person/3.jpg" alt="" className="right-bar-profile-img" />
                            <span className="right-bar-online"></span>
                        </div>
                        <span className="right-bar-username">Marouane Chamakh</span>
                    </li> 
                    <li className="right-bar-friend">
                        <div className="right-bar-profile-img-container">
                            <img src="/assets/person/3.jpg" alt="" className="right-bar-profile-img" />
                            <span className="right-bar-online"></span>
                        </div>
                        <span className="right-bar-username">Marouane Chamakh</span>
                    </li> 
                    <li className="right-bar-friend">
                        <div className="right-bar-profile-img-container">
                            <img src="/assets/person/3.jpg" alt="" className="right-bar-profile-img" />
                            <span className="right-bar-online"></span>
                        </div>
                        <span className="right-bar-username">Marouane Chamakh</span>
                    </li> 
                </ul>
            </div>
        </div>
    )
}
