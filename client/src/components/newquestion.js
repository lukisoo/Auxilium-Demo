import {React} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import questionhr from "./images/questionhr.png";
import AskQuestion from "./AskAQuestion";
import post1 from "./images/post1.png";
import post2 from "./images/post2.png";
import newQuestion from "./images/newquestion.png";

function NewQuestion () {

    return(
        <div className="mainContent">
            <div className="header">
                <h1 style={{borderBottom: "5px solid white", width: "80%", marginBottom: "5%"}}>RECENT QUESTIONS</h1>
            </div>
            <div>
                <img src={newQuestion} alt="Post"/><br/><br/>
            </div>
            <div>
                <img src={post1} alt="Post"/><br/><br/>
            </div>
            <div>
                <img src={post2} alt="Post"/>
            </div>
        

        </div>
    )};


export default NewQuestion;

