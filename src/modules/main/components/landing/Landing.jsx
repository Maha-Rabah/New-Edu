import React,{useEffect} from 'react'
import './LandingStyle.css'
import { Link } from 'react-router-dom'

const Landing = ({data}) => {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div className='landing'>
      <img src={data.homepic} alt="" />
      <div className="overlay"></div>
        <div className="container info">
            <h2 className='title'>{data.title}</h2>
            <p className='desc'>{data.desc}</p>
          <Link to="/about" className={(data.true)?'button':"none"}>{data.button}</Link>
        </div>
    </div>
  )
}

export default Landing