import './Feed.css'
import Share from "../Share/Share";
import Post from "../Post/Post";
export default function Feed(): JSX.Element{
    return (
        <div className="feed">
            <div className="feed-wrapper">
                <Share />    
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}
