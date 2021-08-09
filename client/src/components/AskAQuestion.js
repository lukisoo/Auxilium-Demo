import {React} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import tips from "./images/tips.png";
import questionhr from "./images/questionhr.png";
import ReactDOM from 'react-dom';
import DelayLink from 'react-delay-link';

function AskQuestion () {
/* 
    const [note, setNote] = useState({
        subject: "",
        tags: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
    }

    setNote(prevNote => {
        return {
            ...prevNote,
            [name]: value
        };
    });

    function submitNote(event) {
        props.onAdd(note);
        event.preventDefault();
    }
 */

    return(
        <div className="mainContent">
            <div className="header">
                <h1 style={{borderBottom: "5px solid white", width: "80%", marginBottom: "5%"}}>ASK A QUESTION</h1>
            </div>
            <div>
                
            <div className="questionFormat">
            <form>
            <div className="theForm">
                <div>
                    <input style={{fontSize: "2rem", marginTop: "25px"}} /*onChange={handleChange} value={note.subject}*/ className="inputFields" name="subject" placeholder="Subject"/>
                    <img className="questionhr1" src={questionhr} alt="A line"/><br/>
                </div>
                <div>
                    <input className="inputFields" /*onChange={handleChange} value={note.tags}*/ name="tags" placeholder="Tags"/>
                    <br/><br/><br/>
                </div>
                <div>
                    <textarea style={{height: "25vh"}} /*onChange={handleChange} value={note.content}*/ className="inputFields" name="content" placeholder="Post your question and/or code here..."/>
                </div>
                <div>
                    <DelayLink delay={2000} to="/viewquestion"><p style={{height: "3.2vh", width: "5vw", textAlign: "center"}} className="theButton newbutton">Submit</p></DelayLink> 
                </div>
            </div>
            </form>
        </div>
                <div style={{left: "75vw", top: "38vh", position: "absolute"}}>
                
                    <img style= {{width: "20vw"}} src={tips} alt="tips"/>
                </div>
            </div>

        

        </div>
    )};


export default AskQuestion;

