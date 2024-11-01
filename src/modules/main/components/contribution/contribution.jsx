import React, { useState } from 'react'
import './contributionStyle.css'
import yellow from '../../../../assets/yellow.svg'
import { FaRotate } from 'react-icons/fa6'


const Contribution = ({conticard}) => {
  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (id) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id] // Toggle the flipped state for the clicked card only
      
    }));
    console.log('flipped card', );
  };

  return (
    <div className='contribution'>
        <h2 className='title'>Our Contribution to SDGs</h2>
         <div className="contribution-container">
          {
            conticard.map((item) => (
              <div className={`contri-card ${flippedCards[item.id] ? 'flipped' : ''}`} onClick={() => handleFlip(item.id)}>
                <div className="card-front">
                  <FaRotate className='rotate' />
                  <img src={item.img} alt="" />
                </div>
                <div className="card-back">
                  <img src={item.sdg} className='sdg-img' alt="" />
                  <h3 className='sdg-title'>{item.title}</h3>
                  <p className='sdg-text'>{item.text}</p>
                </div>
              </div>
            ))
            
          }
          </div>
      {/* {conticard.map(function (item) {
                return (
                  <>
                    <div className="contricard">
                      <img className="con" src={item.img} alt="" />
                    </div>
                  </>
                );
            })} */}



      {/* <img src={yellow} alt="" className='yellow1'/> */}
      {/* </div> */}
    </div>
  )
}

export default Contribution