import React,{useEffect} from 'react'
import './joinUs.css'
import notebook from '../assets/notebook.svg'
import linkedin from '../assets/linkedin.svg'
import Job from '../components/Jobs/Job.jsx'
import Values from '../../about/components/Values/Values.jsx'
import icon1 from '../assets/jicon1.svg'
import icon2 from '../assets/jicon2.svg'
import icon3 from '../assets/jicon3.svg'
import people from '../assets/vol.jpg'
import blue from '../../../assets/Blue.svg'
import yellow from '../../../assets/yellow.svg'
/////////////////////////////////////////////////////////
const valuedata=[{
    icon:icon1,
    caption:"Develop your skills",
  },
  {
    icon:icon2,
    caption:"Contribute to a sustainable impact",
  },
  {
    icon:icon3,
    caption:"Create global connections",
  },]

  const jobdesc = [
    {pos: "Graphic Design" , time: "5-7 hours/week", lastday: "Open till filled!", career: "Editing Team", job_info: "bla bla"},
    {pos: "Video Editor" , time: "5-7 hours/week", lastday: "Open till filled!", career: "Editing Team", job_info: "bla bla2"},
    {pos: "UI/ UX" , time: "7-10 hours/week", lastday: "Open till filled!", career: "IT Team", job_info: "bla bla3"},
    {pos: "Communication Manager" , time: "5-7 hours/week", lastday: "Open till filled!", career: "Administration Team", job_info: "bla bla4"}
  ]
////////////////////////////////////////////////

const JoinUs = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className='joinUs-container container'>
        <div className="jointitle">
            <h1>Join us in shaping a brighter future for Syria</h1>
        </div>
        <div className="joinUs-op-container">
            
            <img src={notebook} alt="" /> 
                
            <div className="joinUs-op-content">
                <h3>Volunteer opportunities</h3>
                <p>Join our team of diverse, passionate people and foster a culture that empowers you to do your best work, for a better brighter future for Syria.</p>
            </div>

            <div className='joinbox'>
              <Job jobdescs={jobdesc}/>
            </div>
            
            <div className="cta-linkedin">
                <a href="https://www.linkedin.com/company/edubridge2024" alt="linked in button">
                    <img src={linkedin} alt="linked in logo" /><span>Follow us on Linkedin</span>
                </a>
            </div>
        </div>
        <img src={yellow} alt="" className='yellowjoin'/>

    <div className="people-container">
        <img src={people} alt="" />
    </div>

    <a href="https://docs.google.com/forms/d/e/1FAIpQLSerYDDPbR6DF7I5HGfiK69lVjTubapm1P0giJTKp10jC3ndYQ/viewform" className='button'>Volunteer with EduBridge</a>

    <div className="volunteer-container">
        <h2 className='title'>Why volunteer with us</h2>
        <Values valuecard={valuedata}/>
    </div>
    <img src={blue} alt="" className='bluejoin'/>


    </div>
  )
}

export default JoinUs