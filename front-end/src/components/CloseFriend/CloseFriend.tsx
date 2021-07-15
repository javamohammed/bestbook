import React from "react";
import './CloseFriend.css'
import IUser from "../../interfaces/IUser";

interface CloseFriendProps {
    user: IUser
}

const  CloseFriend : React.FC<CloseFriendProps> = props  =>{
    const user = props.user
    return (
        <li className="side-bar-friend">
            <img className="side-bar-friend-img" src={user.profilePicture}  alt=""/>
            <span className="side-bar-friend-name">{user.username}</span>
        </li>
    )
}

export default CloseFriend