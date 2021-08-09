import { React } from 'react';
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo.png";


function NavBarSide () {
    return (
        <div class="mainNavBar">
            <Link to="/">
            <div>
                <img style={{height: "8vh", marginTop: "2.5vh", marginLeft: "1.5vw", marginBottom: "0"}} src={logo} alt="Logo"/>
            </div></Link>
            <div class="mainNavLinks">
                <hr/>
                <Link to="/askquestion"><div>
                    <h2 style={{color: "#242423"}}>Ask A Question</h2>
                </div></Link>
                <hr />
                <div>
                    <Link to="/explore">
                    <h3>Explore/FAQ</h3>
                        <ul>
                            <li>What are your best t...?</li>
                            <li>Can I become a softw...</li>
                            <li>What is the differenc...</li>
                        </ul>
                    </Link>
                </div>
                <hr />
                <Link to="/leaderboard">
                <div>
                    <h3>Weekly Leaderboard</h3>
                    <ol>
                        <li>Panda128</li>
                        <li>Crocodile61</li>
                        <li>Otter03</li>
                        <li>Penguin94</li>
                        <li>GIraffe73</li>
                    </ol>
                </div></Link>
                <hr />

                <Link to="/community">
                <div>
                    <h3>Auxilium Community</h3>
                </div>
                </Link><hr />

                <Link to="/challenges">
                <div>
                    <h3>Challenges</h3>
                </div>
                </Link><hr />

                   <Link to="/aboutus">
                    <div>
                        <h3>About</h3>
                    </div>
                    </Link>
                <hr />
                
            
            </div>
        </div>
    )};


export default NavBarSide;
