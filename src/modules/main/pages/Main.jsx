import React from 'react'
import Contribution from '../components/contribution/contribution'
import Landing from '../components/landing/Landing'
import { useState ,useEffect } from 'react';
import ProgramCards from '../components/ProgramCards/ProgramCards';
import { BiColor } from 'react-icons/bi';
import Numbers from '../components/Numbers/Numbers';
import con3 from '../../main/assets/con3.svg'
import con2 from '../../main/assets/con2.svg'
import con1 from '../../main/assets/con1.svg'
import sdg4 from '../../main/assets/sdg4.svg'
import sdg10 from '../../main/assets/sdg10.svg'
import sdg17 from '../../main/assets/sdg17.svg'
import homepic from '../assets/landing.png'


const Main = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])
////////////////////////////DATA/////////////////////////
const landingdata={
    homepic:homepic,
    title:'From Syrians To Syrians',
    desc:'We envision a generation of Syrian youth empowered by education to overcome challenges and become key contributors in shaping a brighter future for Syria and the world.',
    button:'Get to know us',
    true:true,
}

  /////Programs Data
  const progdata= [

    {
        color:'green',
        name:"EduMentoring",
        about:'Academic mentorship programme',
        programname:'/edumentoring'
    },
    {
      color:'yellowcard',
      name:"EduLens",
      about:'Series of podcast episodes',
      programname:'edulens'
  },
    {   color:'pink',
        name:"EduCounselling",
        about:'Counseling project for individuals currently applying for scholarships',
        programname:'/educounseling'
    },

  ]

const bridgetitle =' EduBridge in Numbers';


const contrdata=[
  {
    'id': 1,
    img: con3,
    sdg: sdg4,
    'title':"Quality Education (SDG 4):",
    'text':"EduBridge organisation enhances educational access and quality for Syrian students through increasing awareness, personalised academic mentorship and financial support."
  },
  {
    'id': 2,
    img:con2,
    sdg: sdg10,
    'title':"Reduced Inequalities (SDG 10):",
    'text':"EduBridge organisation is committed to addressing educational disparities by focusing on Syrian students in conflict-affected areas. We strive to reduce inequalities in access to quality education, ensuring that all Syrian youth have the opportunity to pursue higher education and improve their prospects."

  },
  {
    'id': 3,
    img:con1,
    sdg: sdg17,
    'title':"Partnership for the Goals (SDG 17):",
    'text': "EduBridge organisation's collaborative efforts with the community exemplify the importance of partnership in achieving sustainable development goals, especially in education."

  },
]
///////////////////////////////////////////////////////////

  return (
    <div>
      <Landing data={landingdata}/>
      <ProgramCards programcard={progdata}/>
      <Numbers title={bridgetitle} type="Home"/>
      <Contribution conticard={contrdata}/>
    </div>
  )
}

export default Main