import {React} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import lb1 from "./images/lb1.png";
import lb2 from "./images/lb2.png";
import lb3 from "./images/lb3.png";
import lb4 from "./images/lb4.png";


function LeaderBoard () {
    return(
        <div className="mainContent">
            <div className="header">
                <h1 style={{borderBottom: "3px solid white", width: "25%", marginBottom: "5%"}}>LEADERBOARD</h1>
            </div>
            <div style={{margin: "0 auto 0 auto"}}>
                <img src={lb1} alt="leaderboard person"/><br/><br/>
                <img src={lb2} alt="leaderboard person"/><br/><br/>
                <img src={lb3} alt="leaderboard person"/><br/><br/>
                <img src={lb4} alt="leaderboard person"/><br/><br/>
            </div>
        </div>
    )};


export default LeaderBoard;
