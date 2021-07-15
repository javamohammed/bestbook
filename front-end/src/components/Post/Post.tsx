import React, {useState} from "react";
import './Post.css'
import IPost from "../../interfaces/IPost";
import IUser from "../../interfaces/IUser";
import { MoreVert } from "@material-ui/icons";
interface PostProps {
    post: IPost,
    user: IUser
}
interface ILike {
    like: number;
    isLiked: boolean;
  }
const Post:React.FC<PostProps> = props  =>{
    const post = props.post
    const user = props.user
    const [likeData, setLikeData ] = useState<ILike>({
        like: post.like || 0,
        isLiked: false
    })
    const likeHandler = () => {
        if(likeData.isLiked){
            setLikeData({like: likeData.like - 1, isLiked: !likeData.isLiked})
        }else{
            setLikeData({like: likeData.like + 1, isLiked: !likeData.isLiked})
        }
       
    }
    return (
        <div className="post">
            <div className="post-wrapper"> 
                <div className="post-top">
                    <div className="post-top-left">
                        <img className="post-profile-img" alt="" src={user.profilePicture} />
                        <span className="post-username">{user.username}</span>
                        <span className="post-date">{post.date}</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVert />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">{post.desc}</span>
                    <img className="post-img" src={post.photo} alt="" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img src="/assets/like.png" alt="" className="like-icon" onClick={likeHandler} />
                        <img src="/assets/heart.png" alt="" className="like-icon" onClick={likeHandler} />
                        <span className="like-counter">{likeData.like} people like it</span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-comments-text">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post