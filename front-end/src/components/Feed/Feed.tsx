import React from "react";
import './Feed.css'
import Share from "../Share/Share";
import Post from "../Post/Post";
import IPost from "../../interfaces/IPost";
import IUser from "../../interfaces/IUser";
import { Posts, Users } from "../../dummyData";


const  Feed : React.FC = _  =>{
    const PostsTyped:IPost[] = Posts as IPost[]
    return (
        <div className="feed">
            <div className="feed-wrapper">
                <Share />    
                {PostsTyped.map(function(p: IPost):JSX.Element {
                    const user:IUser = Users.filter(u => u.id === p.userId)[0] as IUser;
                    return <Post post={p} user={user}  />
                })}
            </div>
        </div>
    )
}

export default Feed