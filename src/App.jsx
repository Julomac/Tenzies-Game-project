import { useState } from 'react'
import './App.css'
import Dice from "./assets/Dice"
function App() {
  

  return (
    <main className='allApp'>
      <body className='mainBoard'>
        <h1 className='title'>Tenzies</h1>
        <p className='rules'>
          Roll until all dice are the same. Click each die to freeze it at its current value
          between rolls.
          </p>
          <Dice className = "dice" styleDice="dice"/>
          <button className='rollButton'>Roll</button>
        </body>
    </main>
  )
}

export default App
