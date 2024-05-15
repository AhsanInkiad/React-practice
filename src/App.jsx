import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
    </>
  )
}

function Person(){
  const age = 15;
  return <h3>I am a person and my age is: {age}</h3>
}

function Student(){
  return (
    <div className='student'>
      <h3>This is a student.</h3>
      <p>Name:</p>
      <p>Age:</p>
    </div>
  )
}

function Developer(){
  const styles = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple'
  }
  return (
    <div>
      <h5>Devo Devs</h5>
      <p>Coding:</p>
    </div>
  )
}
export default App
