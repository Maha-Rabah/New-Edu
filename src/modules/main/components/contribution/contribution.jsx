import React from 'react'
import './contributionStyle.css'
import yellow from '../../../../assets/yellow.svg'
const Contribution = ({conticard}) => {
  return (
    <div className='contribution'>
        <h2 className='title'>Our Contribution to SDGs</h2>
         <div className="container">
      {conticard.map(function (item) {
                return (
                  <>
                    <div className="contricard">
                      <img className="con" src={item.img} alt="" />
                    </div>
                  </>
                );
            })}
      <img src={yellow} alt="" className='yellow1'/>
      </div>
    </div>
  )
}

export default Contribution