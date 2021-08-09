import {React} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function AboutPage () {
    return(
        <div className="mainContent aboutPage">
            <div className="header">
                <h1 style={{borderBottom: "3px solid white", width: "25%", marginBottom: "5%"}}>ABOUT</h1>
            </div>
            <div>
                <h1>Auxilium is a platform made by developers for developers. It has been specifically designed to be beginner friendly and easy to navigate, allowing all developers, including beginners, to find simple and understable solutions to their coding problems. Auxilium means ‘aid’ or ‘help’ in latin.<br/><br/>As developers ourselves, we believe that learning how to ask for help is crucial to becoming a better developer. With this in mind, we created Auxilium to help navigate this learning process for beginners.

                <br/><br/>After executing the Q&A foundation of our web app, the team at Auxilium have created a special community feature for students and aspiring developers alike to meet. Whether it is finding a new friend, making a project, or forming a hackathon team for the weekend, the community feature is aimed at bringing developers together to develop diversity of thought and to promote engagement globally.</h1>
            </div>
        </div>
    )};


export default AboutPage;
