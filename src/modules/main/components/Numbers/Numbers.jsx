import React, { useState } from 'react'
import './NumberStyle.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'


// const [numberdata, setNumberdata] = useState([]);

// useEffect(() => {
//   fetch("https://api.edu-bridge.org.uk/statistics")
//     .then((response) => {
//       return response.json();
//     })
//     .then((numberdata) => {
//       setNumberdata(numberdata);
//     });
// }, []);

const Numbers = ({title,numoptions,mentnumbers}) => {

  const [counterOn, setCounterOn] = useState(false)

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
      <div className='Numbers'>
        <div className="container">
          <h2 className='title'>{title}</h2>
          <div className="info">
          <ul>
              {numoptions.map((menoption,i) => (

                    <li className='num'key={i}>
                        {counterOn && <CountUp start={0} end={menoption.num} duration={2} delay={0}/>} {menoption.title}
                    </li>
              ))}
          </ul> 
          </div> 
          </div>
      </div>
    </ ScrollTrigger>
  )
}

export default Numbers