import { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid';
import Dice from "./assets/Dice"

function App() {
  const [dices, setDices] = useState([
    {number: 6, clicked: false, key: nanoid()},
    {number: 3, clicked: false, key: nanoid()},
    {number: 4, clicked: false, key: nanoid()},
    {number: 2, clicked: false, key: nanoid()},
    {number: 5, clicked: false, key: nanoid()},
    {number: 2, clicked: false, key: nanoid()},
    {number: 1, clicked: false, key: nanoid()},
    {number: 2, clicked: false, key: nanoid()},
    {number: 4, clicked: false, key: nanoid()},
    {number: 6, clicked: false, key: nanoid()}
  ])

  const clickHandler = (key) => {
    setDices(prevDices => {
      const updatedDices = prevDices.map(dice => {
        if (dice.key === key) {
          return { ...dice, clicked: !dice.clicked }
        }
        return dice
      })
      return updatedDices
    })
  }

  

  return (
    <body className='allApp'>
      <main className='mainBoard'>
        <h1 className='title'>Tenzies</h1>
        <p className='rules'>
          Roll until all dice are the same. Click each die to freeze it at its current value
          between rolls.
          </p>
            <Dice clickHandler={clickHandler} dices ={dices} className = "dice" styleDice="dice"/>
          <button className='rollButton'>Roll</button>
        </main>
    </body>
  )
}

export default App
