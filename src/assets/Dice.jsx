import React from "react"
import PropTypes from 'prop-types';

export default  function Dice(props){

    
    
    
    const allDices = props.dices.map((die) => (
        <div 
        onClick={()=> props.clickHandler(die.key)} 
        key={die.key} className={die.clicked ? "clickedDice" : "dice"}>{die.number}</div>
      ))

    return(
        
        <div className="allDice">
            {allDices}
        </div>
    )


}

Dice.propTypes = {
    dices: PropTypes.arrayOf(
      PropTypes.shape({
        clicked: PropTypes.bool.isRequired,
        number: PropTypes.number.isRequired
      })
    ).isRequired
  }