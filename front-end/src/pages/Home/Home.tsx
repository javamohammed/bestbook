import TopBar from "../../components/TopBar/TopBar";
import Feed from "../../components/Feed/Feed";
import SideBar from "../../components/SideBar/SideBar";
import RightBar from "../../components/RightBar/RightBar";
import "./Home.css"

export default  function Home(): JSX.Element {
    return <>
            <TopBar/>
            <div className="home-container">
                <SideBar />
                <Feed />
                <RightBar home />
            </div>
        </>
} 