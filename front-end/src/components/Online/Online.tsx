import React from "react";
import './Online.css'
import IUser from "../../interfaces/IUser";

interface OnlineProps {
    user: IUser
}

const  Online : React.FC<OnlineProps> = props  =>{
    const user = props.user
    return (
        <li className="right-bar-friend">
        <div className="right-bar-profile-img-container">
            <img src={user.profilePicture} alt="" className="right-bar-profile-img" />
            <span className="right-bar-online"></span>
        </div>
        <span className="right-bar-username">{user.username}</span>
    </li> 
    )
}

export default Online