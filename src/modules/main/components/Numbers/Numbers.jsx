import React, { useEffect, useState } from 'react'
import './NumberStyle.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'

const Numbers = ({title,type}) => {

  const [counterOn, setCounterOn] = useState(false)

  const [numberdata, setNumberdata] = useState([]);

  useEffect(() => {
    fetch("http://13.50.253.237:3013/statistics")
      .then((response) => {
        return response.json();
      })
      .then((numberdata) => {
        setNumberdata(numberdata);
      });
  }, []);

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
      <div className='Numbers'>
        <div className="container">
          <h2 className='title'>{title}</h2>
          <div className="info">
              <ul>
                  {numberdata.map((item) => (
                  item.type === type && (
                        <li className='num' key={item.id}>
                            {counterOn && <CountUp start={0} end={item.count} duration={2} delay={0}/>} {item.name}
                        </li>
                  )
                  ))} 
              </ul> 
          </div> 
        </div>
      </div>
    </ ScrollTrigger>
  )
}

export default Numbers