/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
// import { createTodo } from './graphql/mutations'
// import { listTodos } from './graphql/queries'
import { withAuthenticator } from '@aws-amplify/ui-react'
import logo from './logo.png'
import './App.css'

// Chatbot Modules
import Chatbot from 'react-chatbot-kit'
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

// Components
import GradientBackground from "./components/GradientBackground/GradientBackground";
// import Menu from "./components/Menu/Menu";

// Multi-Pages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, FormEngine, Resources } from "./components";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

/*
Main Parameters for 1080 Creation:
First Name
Middle Initial
Last Name
Filing Status (Checkbox)
*/

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [showBot, toggleBot] = useState(false);
  const [showChatbot, toggleChatbot] = useState(true);
  // const [todos, setTodos] = useState([])

  useEffect(() => {
    // fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  const saveMessages = (messages) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };

  const hStyle = { color: '#C44B3D' };
/*
  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  } */

  // Main Render of the React Site
  return ( 
    <div style={styles.container}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/formengine" exact component={() => <FormEngine />} />
          <Route path="/resources" exact component={() => <Resources />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

const styles = {
  container: { margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: '#C44B3D', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default withAuthenticator(App)