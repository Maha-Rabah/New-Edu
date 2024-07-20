import React,{useEffect} from 'react'
import Vision from '../components/Vision/vision'
import Team from '../components/Team/Team'
import Values from '../components/Values/Values'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
import icon5 from '../assets/icon5.svg'
import icon6 from '../assets/icon6.svg'
// import pic1 from '../assets/MohamadAmino.png'





const valuedata=[{
    icon:icon1,
    caption:"Giving back to the community",
  },
  {
    icon:icon2,
    caption:"Sustainability",
  },
  {
    icon:icon3,
    caption:"Equity",
  },
  {
    icon:icon4,
    caption:"Integrity & Authenticity",
  },
  {
    icon:icon5,
    caption:"Accountability",
  },
  {
    icon:icon6,
    caption:"Transparency",
  },
]


const About = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <Vision/>
      <Team/>
      <Values valuecard={valuedata} title="Our Values"/>
    </div>
  )
}

export default About