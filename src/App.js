import './App.css'
import 'react-daisyui'
import countires from './countires';
import { useState, useRef, useEffect, Button } from 'react';

function App() {
  const [skills, setSkills] = useState([]);
  const [isVisible, setVisible] = useState(false);

  const skill = useRef();
  countires.map((country, idx) => { 
    const {name, prefix} = country; 
    console.log(name, prefix);
  });

  const handleSubmit = (event) => {
    console.log(skill.current.value);
    setSkills([...skills, skill.current.value]);
  }

  return (
    <div className="App">
      
      <label>Add a position</label>
      <div>
      <input ref={skill} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      <button className="btn" onClick={handleSubmit}>Button</button>
      <ul className="frame">{skills.map((skill, idx) => {
          return <div><li key={idx}>{skill}</li></div>
        })}</ul>
      </div>
      <button onClick={() => setVisible((prev) => !prev)}>Regions</button>
      
      {isVisible && <div className="menu">{countires.map((country, idx) => { 
        console.log('data,', country);
        const {name, region} = country; 
        return <div key={idx}>{name}</div> 
      })
      }</div>}
    </div>
  );
}

export default App;
