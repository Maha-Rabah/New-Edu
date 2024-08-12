import React from 'react'
import vision from '../../assets/vision.png';
import './visionStyle.css'
import roze from '../../../../assets/roze.svg'
// import dashed from '../../assets/Ellipse 55.png'
// import dashed2 from '../../assets/Ellipse 56.png'

const title=['Our Vision and Mission'];
const descvision= ['We envision a generation of Syrian youth empowered by education to overcome challenges and become key contributors to shaping a brighter future for Syria and the world. We facilitate access to international education for Syrian youth by providing comprehensive mentorship, financial support, networking opportunities, and harnessing the support of the Syrian diaspora.'];

const Vision = () => {
  return (
    <div className='vision'>
        <div className="container">
            <div className="info">
                <h2 className='title'>{title}</h2>
                <p className='desc'>{descvision}</p>
            </div>

            <div className="image">
              <img src={vision}  className="visimg"/>
            </div>
        </div>
      <img src={roze} alt="" className='roze2' />

    </div>
  )
}

export default Vision