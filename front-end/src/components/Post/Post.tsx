import './Post.css'
import { MoreVert } from "@material-ui/icons";
export default function Post(): JSX.Element{
    return (
        <div className="post">
            <div className="post-wrapper"> 
                <div className="post-top">
                    <div className="post-top-left">
                        <img className="post-profile-img" alt="" src="/assets/person/1.jpg" />
                        <span className="post-username">Mohammed Aoulad Bouchta</span>
                        <span className="post-date">5 mins ago</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVert />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">Hi its my first post!!</span>
                    <img className="post-img" src="/assets/post/1.jpeg" alt="" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img src="/assets/like.png" alt="" className="like-icon" />
                        <img src="/assets/heart.png" alt="" className="like-icon" />
                        <span className="like-counter">30 people like it</span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-comments-text">10 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
