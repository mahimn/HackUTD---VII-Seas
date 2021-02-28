import React, { useEffect, useState } from "react";
/* src/App.js */
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'
import logo from '../logo.png'
import '../App.css'

// Chatbot Modules
import Chatbot from 'react-chatbot-kit'
import ActionProvider from '../ActionProvider';
import MessageParser from '../MessageParser';
import config from '../config';

// Components
import GradientBackground from "./GradientBackground/GradientBackground";

import awsExports from "../aws-exports";

import "./Home.css"

Amplify.configure(awsExports);

const initialState = { name: '', description: '' }
  
const saveMessages = (messages) => {
  localStorage.setItem("chat_messages", JSON.stringify(messages));
};
  
const loadMessages = () => {
  const messages = JSON.parse(localStorage.getItem("chat_messages"));
  return messages;
};

const bgstyle = { height: '100vh'}

function Home() {
    const [showBot, toggleBot] = useState(false);
    const hStyle = { color: '#C44B3D' };
  return (
    <div className="home" style={bgstyle}>
      <div class="container">
        <h2 style={ hStyle } className = "title">Welcome to Comet Tax!</h2>
        <h3 style={{ color: 'white' }} className = "title" >A better tax companion designed by students, for students.</h3>
        <img src={logo} className="App-logo" alt="logo" className = "picture"/>
      <div classname = "robot">
        {showBot && (
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageHistory={loadMessages()}
            messageParser={MessageParser}
            saveMessages={saveMessages}
          />
        )}
        <button onClick={() => toggleBot((prev) => !prev)}>CosmoBot</button>
      </div>
      </div>
    </div>
  );
}

export default Home;