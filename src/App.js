import './App.css';
import CounterButton from './button';
import { useState } from 'react'



function App() {

  const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  const [showCounterButtons, setShowCounterButtons] = useState(false);
  const [showCheckBoxes, setShowCheckBoxes] = useState(true);
  const [selectedCheckBoxes, setSelectedCheckBoxes] = useState([]);

  function getSelectedOptions() {
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    const selectedKeys = Array.from(checkBoxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
    setSelectedCheckBoxes(selectedKeys);
    setShowCounterButtons(true);
    setShowCheckBoxes(false)
    
    // checkBoxes.forEach(checkbox => {
    //   if (checkbox.checked) {
    //     selectedCheckBoxes.push(checkbox.value)
    //   }
    // })
    // setShowCounterButtons(true)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Piano Exercise Tracker</h1>
        {showCheckBoxes ? (
          <div id='checkboxListAndSelectKeysButton'>
            <form id='checkList'>
          {keys.map((key, index) => {
            return (
              <div className='checkboxAndLabelUnits'>
                <input type="checkbox" id={`${key}-CheckBox`} name={key} value={key} />
                <label for={`${key}-CheckBox`}> {key}</label>
                <br></br>
              </div>
            )
          })}
        </form>
        <button onClick={getSelectedOptions} id='selectKeysButton' >Select Keys</button>
          </div>
        ) : <p>Track your successes and failures below :D</p>}
      
        {showCounterButtons? (
          <div className='buttonContainer'>
            <>
                  <p>Selected Keys</p>
            </>
            {selectedCheckBoxes.map((key, index) => {
              return (
                  <CounterButton key={index} id={key} />
              )
            })}
          </div>
        ) : (
          <p>Select the keys you want to practice.</p>
        )}
      </header>
    </div>
  );
}

export default App;
