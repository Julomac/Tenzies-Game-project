import { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid';
import Dice from "./assets/Dice"
import Restart from "./assets/Restart"


function App() {
  const [dices, setDices] = useState([
    {number: getRandomNumber(1, 6), clicked: false, key: nanoid()},
    {number: getRandomNumber(1, 6), clicked: false, key: nanoid()},
    {number: getRandomNumber(1, 6), clicked: false, key: nanoid()},
    {number: getRandomNumber(1, 6), clicked: false, key: nanoid()},
    {number: getRandomNumber(1, 6), clicked: false, key: nanoid()},
    {number: getRandomNumber(1, 6), clicked: false, key: nanoid()},
    {number: getRandomNumber(1, 6), clicked: false, key: nanoid()},
    {number: getRandomNumber(1, 6), clicked: false, key: nanoid()},
    {number: getRandomNumber(1, 6), clicked: false, key: nanoid()},
    {number: getRandomNumber(1, 6), clicked: false, key: nanoid()}
  ])


//this makes randomNumber
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  // this check which dice has been clicked
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
  
  //this changes the dice number if it hasn't been clicked
  const handleButtonClick = () => {
    setDices(prevDices => {
      const updatedDices = prevDices.map( dice =>{

        if(!dice.clicked){
        return{...dice, number: getRandomNumber(1, 6)}
        }
        else{
          return{...dice}
        }
      })
      return updatedDices
    })
  }
  // handle restarting the game
  const handleRestartClick = () => {
    setDices(prevDices => {
      const updatedDices = prevDices.map( dice =>{
        return{...dice, number: getRandomNumber(1, 6), clicked:false}
      })
      return updatedDices
    })
  }

  return (
    <div className='allApp'>
      <main className='mainBoard'>
        <h1 className='title'>Tenzies</h1>
        <p className='rules'>
          Roll until all dice are the same. Click each die to freeze it at its current value
          between rolls.
          </p>
          <Dice clickHandler={clickHandler} dices ={dices} className = "dice" styleDice="dice"/>
          <button className='rollButton' onClick={handleButtonClick} >Roll</button>
          <div className='restartBox'>
            <Restart onClick={handleRestartClick} dices={dices}/>
          </div>
        </main>
    </div>
  )
}

export default App
