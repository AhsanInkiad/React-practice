import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Singer from './Singer'
import Count from './Count'
import Team from './Team'
import Users from './Users'

function App() {

  // name ="Laptop" eita hocche property (props), eita amra pathailam. 
  // Eta object akare recieve hobe. {name: 'Laptop', price: 55}
  const singers = [
    { id: 1, name: 'Akib', age: 24 },
    { id: 2, name: 'Amid', age: 28 },
    { id: 3, name: 'Fiat', age: 35 }
  ];

  // event handling
  function handleClick() {
    alert('button clicked');
  }

  const addFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1>Vite + React</h1>

      <button onClick={handleClick}> Click Me </button>
      <button onClick={() => addFive(3)}>Cick to add 5</button>

      <Count></Count>
      <Team></Team>
      <Users></Users>

      {/* {
      singers.map(singer => <Singer singer={singer}></Singer>)
    } */}


      {/* 
      <Todo
        task="Learn React"
        isDone={true}>
      </Todo>

      <Todo
        task="Core Concept"
        isDone={true}>
      </Todo>

      <Todo
        task="Try JSX"
        isDone={false}>
      </Todo> */}

      {/* <Person></Person>
      <Student grade="7" score="90"></Student>
      <Developer></Developer>
      <Device name="Laptop" price="55"></Device>   */}
    </>
  )
}

function Person() {
  const age = 15;
  return <h3>I am a person and my age is: {age}</h3>
}

function Student({ grade = 1, score = 0 }) { // direct destructuirng korlam. Props er default value set kore rakhlam.
  // const {grade, score} = props; // Ebhabeo kora jai
  return (
    <div className='student'>
      <h3>This is a student.</h3>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Developer() {
  const styles = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px' // used camel case while writing borderRadius.
  }
  return (
    <div style={styles}>
      <h5>Devo Devs</h5>
      <p>Coding:</p>
    </div>
  )
}

function Device(props) {
  // return e giye props recieve korlam. Ebhabe chara arekbhabe kora jai
  // Destructuring kore. Destructuring kore Student component e korlam.
  return <h2>This device: {props.name} Price: {props.price}  </h2>
}
export default App
