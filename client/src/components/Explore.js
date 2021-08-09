import {React} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"
import Friends from "./images/Friends.png";

function ExplorePage () {
    return(
        <div className="mainContent explorePage">
            <div className="header">
                <h1 style={{borderBottom: "5px solid white", width: "35%", marginBottom: "5%", marginRight: "25%", display: "inline-block"}}>EXPLORE</h1>
                <Link to="/viewquestions"><h1 style={{marginBottom: "5%", fontSize: "4rem", float: "right", display: "inline-block", textDecoration: "underline"}}>VIEW ALL</h1></Link>
            </div>
            <div>
                <div style={{float: "left"}}>
                    <h2>FAQs:</h2>
                    <h3>What are your best tips for an interview...</h3>
                    <h3>Can I become a software engineer without...</h3>
                    <h3>What is the difference between var, let a...</h3>
                    <h3>What is the best way to learn to program f...</h3>
                    <div style={{marginTop: "5%", float: "left"}}>
                    <div>
                        <h2>Recently Added:</h2>
                        <h3>Why do senior developers always use the...</h3>
                        <h3>What's the easiest way to convert my pa...</h3>
                        <h3>How do I insert an image into my web app?</h3>
                        <h3>How do I convert this whole loop into a f..?</h3>
                        <h3>PLEASE HELP! WHY IS MY CODE NOT EXECUTIN...</h3>
                    </div>
            </div>
                </div>
                <div style={{width: "40%", float: "right"}}>
                    <h2>Search by tag</h2>
                    <div className="tags">Python</div>
                    <div className="tags">Tips</div>
                    <div className="tags">HTML</div>
                    <div className="tags">CSS</div>
                    <div className="tags">Projects</div>
                    <div className="tags">Help</div>
                    <div className="tags">JavaScript</div>
                    <div className="tags">AI</div>
                    <div className="tags">Frontend</div>
                    <div className="tags">Backend</div>
                    <div className="tags">C/C++</div>
                    <div className="tags">Blockchain</div>
                    <div className="tags">Internships</div>
                    <div className="tags">And more...</div>
                </div>
            </div>

        

        </div>
    )};


export default ExplorePage;
