/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import { withAuthenticator } from '@aws-amplify/ui-react'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

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
  }

  return (
    <div style={styles.container}>
<<<<<<< Updated upstream
      <h2>Amplify Todos</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addTodo}>Create Todo</button>
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo.name}</p>
            <p style={styles.todoDescription}>{todo.description}</p>
          </div>
        ))
      }
=======
      <h2>Welcome to Comet Tax!</h2>
      <h3>A better tax software designed by students, for students.</h3>
      <img src={logo} className="App-logo" alt="logo" />
      <form id = "taxes">
        <div class = "question">
          <label id = "lastname-label" for = "firstname"> First Name </label>
            <input type = "text" name = "firstname" id = "firstname" class = "field" placeholder= "Enter your first name" required />
        </div>
        <div class = "question">    
          <label id = "mi-label" for = "mInit"> Middle Initial </label>
            <input type = "text" name = "mInit" id = "mInit" class = "field" placeholder= "Enter your middle Initial" required />
        </div>
        <div class = "question">
          <label id = "name-label" for = "lastname"> Last Name </label>
            <input type = "text" name = "name" id = "name" class = "field" placeholder= "Enter your last name" required />
        </div>
        <div class = "question">
          <label id = "status-label" for = "status"> How are you filing your taxes? </label>
          <br/><br/>
          <label><input name = "status" value = "Single" type = "radio" class = "radio-input" /> Single </label>
          <br/>
          <label><input name = "status" value = "Joint" type = "radio" class = "radio-input" /> Married filing jointly </label>
          <br/>
          <label><input name = "status" value = "Separately" type = "radio" class = "radio-input" /> Married filing separately </label>
          <br/>
        </div>
        <div class = "question">
          <label id = "social-security" for = "socialsecurity"> Social Security Number </label>
            <input type = "text" name = "socialsecurity" id = "socialsecurity" class = "field" placeholder= "Enter your social security number" required />
        </div>
        <div class = "question">
          <label id = "US-label" for = "US"> Do you live in the US? </label>
          <br/><br/>
          <label><input name = "US" value = "Yes" type = "radio" class = "radio-input" /> Yes </label>
          <br/>
          <label><input name = "US" value = "No" type = "radio" class = "radio-input" /> No </label>
          <br/>
        </div>
        <div class = "question">
          <label id = "address-label" for = "address"> Home Address (Number and Street) </label>
            <input type = "text" name = "address" id = "address" class = "field" placeholder= "Enter your address" required />
        </div>
        <div class = "question">
          <label id = "spt-no-label" for = "aptno"> Apartment number (if applicable) </label>
            <input type = "text" name = "aptno" id = "aptno" class = "field" placeholder= "Enter your apartment number" />
        </div>
        <div class = "question">
          <label id = "addresstwo-label" for = "city"> City/town </label>
            <input type = "text" name = "city" id = "city" class = "field" placeholder= "Enter your city/town" required />
        </div>
        <div class = "question">
          <label id = "state-label" for = "state"> State </label>
            <input type = "text" name = "state" id = "state" class = "field" placeholder= "state" required />
        </div>
        <div class = "question">
          <label id = "zipcode-label" for = "zipcode"> ZIP code </label>
            <input type = "text" name = "zipcode" id = "zipcode" class = "field" placeholder= "Enter your ZIP Code" required />
        </div>
        <div class = "question">
          <label id = "dependence-label" for = "dependence"> Someone can claim: </label>
          <br/><br/>
          <label><input name = "dependence" value = "You" type = "radio" class = "checkbox" /> You are a dependent </label>
          <br/>
          <label><input name = "dependence" value = "Spouse" type = "radio" class = "radio-input" /> Your spouse as a dependent </label>
          <br/>
        </div>
        <div class = "question">
          <label id = "wages-label" for = "wages"> How much did you make in wages, salaries, tips, etc.? Refer to W2 if needed. </label>
            <input type = "text" name = "wages" id = "wages" class = "field" placeholder= "Enter wages" required />
        </div>
      </form>
>>>>>>> Stashed changes
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default withAuthenticator(App)