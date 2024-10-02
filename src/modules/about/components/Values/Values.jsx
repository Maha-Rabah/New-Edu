import React from 'react'
import './ValuesStyle.css'

const Values = ({valuecard, title}) => {
  return (
    <div className='values'>
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
    </div>
  )
}

export default Values