import React from 'react'
import './card.css'

const Card = ({isWhite, img, title, num}) => {
  return (
    <div className="chart">
        <img src={img} alt="" />
        <div className={isWhite? "chart-desc-w": "chart-desc"}>
            <p className={isWhite? "chart-desc-title-w": "chart-desc-title"}>{title}</p>
            <p className={isWhite? "chart-desc-num-w": "chart-desc-num"}>{num}</p>
        </div>
    </div>
  )
}

export default Card