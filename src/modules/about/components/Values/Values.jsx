import React from 'react'
import './ValuesStyle.css'


import yellow2 from '../../../../assets/yellow.svg'
// import blue2 from '../../../../assets/Blue.svg'


const Values = ({valuecard, title}) => {
  return (
    <div className='values'>
      {/* <img src={yellow2} alt="" className='yellow2'/> */}
        <h2 className='title'>{title}</h2>
        <div className="container">
        {valuecard.map(function (item) {
                return (
                  <>
                  <div className='valuecard'>
                      <div className='icon'>
                        <img src={item.icon} alt="" />
                      </div>
                      <div className='caption'>
                        <p>{item.caption}</p>
                      </div>
                  </div>
                  </>
                );
            })}
        </div>
        {/* <img src={blue2} alt="" className='blue2'/> */}
    </div>
  )
}

export default Values