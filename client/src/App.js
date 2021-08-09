import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "../src/contexts/AuthContext";
import { useAuth } from "../src/contexts/AuthContext"
import DisplayPage from "../src/components/DisplayPage";
import Login from "../src/components/Login/Login";
import SignUp from "../src/components/SignUp/SignUp";
import NavBarSide from "./components/NavBarSide";
import NavBarTop from "../src/components/NavBarTop";
import ProfilePage from "../src/components/profile";
import AboutPage from "../src/components/about";
import CommunityPage from "../src/components/community";
import ExplorePage from "../src/components/Explore";
import ViewQuestions from "../src/components/ViewQuestionsPage";
import LeaderBoard from "../src/components/Leaderboard";
import AskQuestion from "../src/components/AskAQuestion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Challenges from "../src/components/challenges";
import NewQuestion from "../src/components/newquestion";

import { TypeRegistry } from '@polkadot/types';
import {Api as ApiPromise} from '@cennznet/api';
import {useEffect, useState} from "react";
import {web3Accounts, web3Enable, web3FromSource} from '@polkadot/extension-dapp';
import {cennznetExtensions} from "./cennznetExtensions";
import {getSpecTypes} from '@polkadot/types-known';
import {defaults as addressDefaults} from '@polkadot/util-crypto/address/defaults';
import { Keyring } from '@polkadot/keyring';

const registry = new TypeRegistry();
const endpoint = 'wss://kong2.centrality.me/public/rata/ws';
const collectionName = 'Auxilium Achievements';
const collectionId = 0;

function App() {
  
  var isLoggedIn = true;

  if (isLoggedIn === false) {
    document.querySelector("body").style.backgroundColor = "#1b9aaa";
  } else {
    document.querySelector("body").style.backgroundColor = "#333533";
  };



  return (
    <Router>
    <AuthProvider> {
          <div>
          <Switch>
              <Route path="/" exact></Route>

              <Route path="/Achievements">
                <div>

                 <div className="modal-content">
                    <span className="close">&times;</span>
                    <h2  className="neonText" >{this.props.title}</h2>
                    <div className="modal-form">
                        <label className="neonText">
                            Enter IPFS url:
                            <input type="text" onChange={(event) =>{this.props.nftAttributeHandler(event.target.value)}} />
                        </label>
                        <label className="neonText" >
                            Enter Token owner address:
                            <input type="text" onChange={(event) =>{this.props.tokenOwnerHandler(event.target.value)}} />
                        </label>
                        <label className="neonText" >
                            Enter Token name:
                            <input type="text" onChange={(event) =>{this.props.tokenOwnerNameHandler(event.target.value)}} />
                        </label>
                        <button className="nft-button" onClick={() =>{this.props.addTokenHandler()}}
                        >Add</button>
                    </div>


                </div>
                  
                </div>

              </Route>



              <Route path="/login" exact></Route>
              <Route path="/signup" exact></Route>
              <Route path="/*">
              <div style={{position: "fixed", width: "20%", marginLeft: "0", float: "left"}}>
                  <NavBarSide/>
              </div>
              <div style={{backgroundColor: "#333533", position: "fixed", width: "80%", top: "0", right: "0"}}>
                  <NavBarTop/>
              </div>
              </Route>
            </Switch>

                 <Switch>

                      <Route path="/profile">
                          <div style={{width: "80%", float: "right"}}>
                              <ProfilePage />
                          </div>
                      </Route>

                      <Route path="/aboutus">
                          <div style={{width: "80%", float: "right"}}>
                              <AboutPage />
                          </div>
                      </Route>

                      <Route path="/community">
                          <div style={{width: "80%", float: "right"}}>
                              <CommunityPage />
                          </div>
                      </Route>

                      <Route path="/explore">
                          <div style={{width: "80%", float: "right"}}>
                              <ExplorePage />
                          </div>
                      </Route>

                      <Route path="/viewquestions">
                          <div style={{width: "80%", float: "right"}}>
                              <ViewQuestions />
                          </div>
                      </Route>

                      <Route path="/leaderboard">
                          <div style={{width: "80%", float: "right"}}>
                              <LeaderBoard />
                          </div>
                      </Route>

                      <Route path="/askquestion">
                          <div style={{width: "80%", float: "right"}}>
                              <AskQuestion />
                          </div>
                      </Route>
                      
                      <Route path="/challenges">
                          <div style={{width: "80%", float: "right"}}>
                              <Challenges />
                          </div>
                      </Route>

                      <Route path="/viewquestion">
                          <div style={{width: "80%", float: "right"}}>
                              <NewQuestion />
                          </div>
                      </Route>


              <Route path="/login">
                  <Login />
              </Route>
              <Route path="/signup">
                  <SignUp />
              </Route>
              <Route path="/" exact>
                  <DisplayPage />
              </Route>
          </Switch>

    </div>
    } </AuthProvider>
    </Router>
  );
}

export default App;
