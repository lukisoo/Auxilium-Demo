import {React} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import PandaProfile from "./images/pandaProfile.png";
import ProfileBar from "./images/profileBar.png";
import twoStars from "./images/2stars.png";
import threeStars from "./images/3stars.png";
import fourStars from "./images/4stars.png";

function ProfilePage () {
    return(
        <div class="mainContent">
            <div className="header">
                <h1 style={{borderBottom: "5px solid white", width: "50%", marginBottom: "5%"}}>MY PROFILE</h1>
            </div>
            <div class="basicInfo">
                <img style={{display: "inline-block", float: "left", height: "100%"}} src={PandaProfile} alt="Panda's Profile Pic"/>
                <div style={{display: "inline-block", marginLeft: "5vw"}}>
                    <h1 style={{fontSize: "4rem !important"}}><strong>Panda128</strong></h1>
                    <h1>About Me:</h1>
                    <h2>I'm a panda! I love helping others and improving myself!!</h2>
                </div>
                <div style={{float: "right"}}>
                    <img src={ProfileBar} alt="Profile Bar"/>
                </div>
            </div>
            <div className="profileInfo">

                <div style={{float: "right"}}>
                    <h1>REPUTATION</h1>
                    <p style={{margin: "0", color: "#CFDBD5"}}>OVERALL:</p><img style={{height: "3vh"}} src={threeStars} alt="Three Stars"/>
                    <p style={{margin: "0", color: "#CFDBD5"}}>Python:</p><img style={{height: "3vh"}} src={fourStars} alt="Four Stars"/>
                    <p style={{margin: "0", color: "#CFDBD5"}}>HTML:</p><img style={{height: "3vh"}} src={threeStars} alt="Three Stars"/>
                    <p style={{margin: "0", color: "#CFDBD5"}}>C:</p><img style={{height: "3vh"}} src={threeStars} alt="Three Stars"/>
                    <p style={{margin: "0", color: "#CFDBD5"}}>CSS:</p><img style={{height: "3vh"}} src={twoStars} alt="Two Stars"/>
                </div>
                <div style={{float: "left"}}>
                    <div>
                        <h1>ACHIEVEMENTS</h1>
                        <h2>Top answer for the Week</h2>
                        <h2>... and 6 more.</h2>
                    </div><br/><br/>

                    <div>
                        <h1>STATS</h1>
                        <h2>94 Questions Asked</h2>
                        <h2>23 QUestions Answered</h2>
                    </div><br/><br/>


                    <div>
                        <h1>RECENT ACTIVITY</h1>
                        <h2>Answered How do I insert an image into my web app?</h2>
                        <h2>Asked How to convert this while loop into a for loop?</h2>
                        <h2>Replied to How do I use a generator</h2>
                    </div>
                </div>
            </div>
            

        </div>
    )};


export default ProfilePage;