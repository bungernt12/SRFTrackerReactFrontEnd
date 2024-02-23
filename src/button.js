import React, { useState } from "react";
import './button.css';


function CounterButton(props) {
    
    const [missCount, setMissCount] = useState(0);
    const [makeCount, setMakeCount] = useState(0);
    
    const incrementMiss = () => {
        setMissCount((prev) => prev + 1)
      }
      
    const incrementMake = () => {
        setMakeCount((prev) => prev + 1)
    }

    const key = props.id
    
    return (
        <div className='eachKeySection' >
            <p className='KeyTitle'>{key}</p>
            <button className='miss button' onClick={incrementMiss} >{missCount}</button>
            <span> </span>
            <button className='make button' onClick={incrementMake} >{makeCount}</button>
            
        </div>

    )
    
    
}

export default CounterButton;