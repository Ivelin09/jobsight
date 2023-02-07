import './App.css'
import 'react-daisyui'
import countries from './countires';
import { useState, useRef, useEffect, Button } from 'react';
import socketIOClient from 'socket.io-client';

function App() {
  const [skills, setSkills] = useState([]);
  const [isSelected, setSelected] = useState(Array.from({ length: countries.length }, (_, i) => false));

  const [isVisible, setVisible] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const [stage, setStage] = useState({name: "", percantage: 0});
  const [jobName, setJobName] = useState("");

  const [currentJob, setJob] = useState({
    name: "",
    positions: [],
    regions: []
  });

  const skill = useRef();
  const job = useRef();

  const obj = [
    {
      "jobName": "Intern",
      "percantage": 40,
      "positions": ["Elixir", "C++", "Rust"],
      "Date": "7th Feburary 2022",
      "regions": ["Australia", "Egypt", "Finland", "South Africa"]
    },
    {
      "jobName": "Intern2",
      "positions": ["Erlang", "C#", "Go"],
      "Date": "1st January 2022",
      "percantage": 56,
      "regions": ["Finland", "South Africa"]
    },
    {
      "jobName": "Intern",
      "positions": ["R", "Python"],
      "Date": "5th February 2022",
      "percantage": 23,
      "regions": ["Australia", "Egypt", "Turkrey"]
    }
  ];

  console.log('asddas', obj);
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
  console.log(skills.length == false);
  const onRegionClick = (event, idx) => {
    setSelected((prev) => { 
      const arr = [...prev];
      arr[idx] = !arr[idx];
      
      return arr;
    });
    console.log(event.target.textContent);
  }

  console.log(jobName); 

  const handleSubmit = (event) => {
    console.log(skill.current);
    setSkills([...skills, skill.current.value]);
  }

  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = socketIOClient('http://localhost:5000');
    socket.on('job_stream', data => {
      setStage(data);
    });
  }, []);

  return (
    <div className="App">
      <div className="card glass center">
      <h1 className='title'>Jobsight</h1>
        <div className="card-body">
          <div className='row'>
            <div className='column'>
              <p>Name</p>
              <input ref={job} type="text"  placeholder="Type here" className="input input-bordered center-block" />
              <button className="center btn nameBtn" onClick={() => { setJobName(job.current.value) } } style={{margin: '5% auto'}}>Name</button>
            </div>
            <div className='column'>
              <h1 className='jobName'>{jobName}</h1>
            </div>
          </div>
          <div className='row'>
            <div className='column'>
            <label>Add a position</label>
            <div>
              <input ref={skill} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
              <button className="btn" onClick={handleSubmit}>add</button>
            </div>
            <div className='row'>
            <button onClick={() => setVisible((prev) => !prev)} >Regions</button>
            <div className='column'>
            {isVisible && <div className="dropdown-content">
            {
              countries.map((country, idx) => { 
              const {name, region} = country; 
              console.log('data', idx, isSelected[idx]);
              return <a className={isSelected[idx] ? "selected" : ""} key={idx} onClick={(e) => onRegionClick(e, idx)}>{name}</a> 
              })
            }
        </div>}
            </div>
            </div>
          </div>
          <div className='column rightColumn'> 
            <p>Display</p>
            <div className='box center'>
            <ul className="frame">{!skills.length ? <p>None positions to display</p> : skills.map((skill, idx) => {
                return <div><li key={idx} onClick={onPositionClick}>{skill}</li></div>
              })}</ul>
            </div>
          </div>
        </div>
      </div>
      <button className='btn' style={{ margin: '0 1%'}}> Submit </button>
    </div>
    <progress className="progress progress-success w-56" value={stage.percantage} max="100"></progress>
    <h1>{stage.name}</h1>
    <div className='jobTasks center'>{obj.map((curr, key) => {
      return (
        <div className="row" style={{ marginTop: '2.5%' }}>
              <div className='column' style={{borderLeft: 'none'}}>
                <p>{curr.jobName}</p>
              </div>
              <div className='c center column'>
                <p>{curr.percantage}%</p>
                <progress className="progress progress-success" value={curr.percantage} max="100"></progress>
              </div>
              <div className='column' style={{borderRight: 'none'}}>
              <p>{curr.Date}</p>
              </div>
            </div>
            );  
    })}</div>
  </div>
  );
}

export default App;
