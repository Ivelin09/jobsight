import './App.css'
import 'react-daisyui'
import countires from './countires';
import { useState, useRef, useEffect, Button } from 'react';

function App() {
  const [skills, setSkills] = useState([]);
  const [isVisible, setVisible] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const skill = useRef();

  const onPositionClick = (event) => {
    let index = skills.indexOf(event.target.textContent);
    if (index !== -1) {
      setSkills((prev) => {
        const newSkills = [...prev];
        newSkills.splice(index, 1);
        return newSkills;
      });
    }
  };
  const onRegionClick = (event) => {
    console.log(event.target.textContent);
  }

  const handleSubmit = (event) => {
    console.log(skill.current);
    setSkills([...skills, skill.current.value]);
  }

  return (
    <div className="App">
      <div className="card glass center">
        <div className="card-body">
          <div className='row'>
            <div className='column'>
            <label>Add a position</label>
            <div>
            <input ref={skill} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <button className="btn" onClick={handleSubmit}>Button</button>

            </div>
            <div className='row'>
            <button onClick={() => setVisible((prev) => !prev)} >Regions</button>
            <div className='scrollMenu column'>
            {isVisible && <div className="dropdown-content">
            {
              countires.map((country, idx) => { 
              const {name, region} = country; 
              return <a className='' key={idx} onClick={onRegionClick}>{name}</a> 
              })
            }
        </div>}
            </div>
            </div>
          </div>
          <div className='column'>
            <p>Display</p>
            <div className='box center'>
            <ul className="frame">{skills.map((skill, idx) => {
                return <div><li key={idx} onClick={onPositionClick}>{skill}</li></div>
              })}</ul>
            </div>
          </div>
        </div>



      </div>
    </div>
  </div>
  );
}

export default App;
