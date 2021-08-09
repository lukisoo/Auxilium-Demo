import {React} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Groups from "./images/Groups.png";
import Friends from "./images/Friends.png";
import FindDevs from "./images/FindDevs.png";

function CommunityPage () {
    return(
        <div className="mainContent">
            <div className="header">
                <h1 style={{borderBottom: "5px solid white", width: "40%", marginBottom: "5%"}}>COMMUNITY</h1>
            </div>
            <div className="bigBox">
                <div style={{left: "2vw"}} className="communityBox">
                    <div className="communityCircle">
                        <img style={{width: "100%", margin: "0 auto 0 auto"}} src={Groups} alt="Search for groups"/>
                    </div>
                    <div className="communityText">
                        <h3 style={{fontSize: "1.2rem"}}>Join a Group</h3>
                        <p style={{fontSize: "1rem"}}>Want to meet developers with similar interests? Join a community today!</p>
                    </div>
                </div>
                <div style={{left: "25vw"}} className="communityBox">
                    <div className="communityCircle">
                        <img style={{width: "100%", margin: "0 auto 0 auto"}} src={Friends} alt="Search for friends"/>
                    </div>
                    <div className="communityText">
                        <h3 style={{fontSize: "1.2rem"}}>Find a Friend</h3>
                        <p style={{fontSize: "1rem"}}>Get paired up with someone random and make a new friend!</p>
                    </div>
                </div>
                <div style={{left: "48vw"}} className="communityBox">
                    <div className="communityCircle">
                        <img style={{width: "100%", margin: "0 auto 0 auto"}}src={FindDevs} alt="Search for developers"/>
                    </div>
                    <div className="communityText">
                        <h3 style={{fontSize: "1.2rem"}}>Post a Project</h3>
                        <p style={{fontSize: "1rem"}}>Got a project or idea you want to work on or an idea? Post it here!</p>
                    </div>
                </div>
            </div>
        

        </div>
    )};


export default CommunityPage;
