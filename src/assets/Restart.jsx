

export default function Restart(props) {

    //check if all the dices number are the same 
    const allTheSame = function(dices){
        const firstNumber = dices[0].number
        
        for (let i = 1; i < dices.length; i++) {
            if (dices[i].number !== firstNumber || dices[i].clicked !== true) {
                return false
            }
        }
        return true
    }
    const result = allTheSame(props.dices)
    
  return (
    <div>
      {result && (
        <button onClick={props.onClick} className='restartButton' >restart</button>
      )}
    </div>
  );
}

