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
import homepic from '../assets/landing.png'


const Main = () => {

////////////////////////////landing/////////////////////////
const landingdata={
  homepic:homepic,
  title:'From Syrians To Syrians',
  desc:'We envision a generation of Syrian youth empowered by educationto to overcome challenges and become key contributors in shaping a brighter future for Syria and the world.',
  button:'Get to know us',
  true:true,
}
  ////////////////////////////////////////////////////////

  ///////////////Programs/////////////////////////////////
  const progdata= [

    {
        color:'green',
        name:"EduMentoring",
        about:'Academic mentorship project',
        programname:'/edumentoring'
    },
    {
      color:'yellowcard',
      name:"EduLens",
      about:'Series of podcast episodes',
      programname:'edulens'
  },
    {   color:'pink',
        name:"EduCounseling",
        about:'Counseling project for individuals currently applying for scholarships',
        programname:'/educounseling'
    },

  ]
/////////////////////////////////////////////////////////////

const numoption = [
  {title : "Applicants", num : 200 },
  {title : "Interviews", num : 45 },
  {title : "Mentees", num : 18 },
  {title : "Episodes", num : 15 },
];
const bridgetitle =' EduBridge in Numbers';

////////////////////////////////////////////////////
const contrimage=[
  {
    img: con3,
  },
  {
    img:con2,
  },
  {
    img:con1,
  },
]

  return (
    <div>
      <Landing data={landingdata}/>
      <ProgramCards programcard={progdata}/>
      <Numbers  title={bridgetitle} numoptions={numoption}/>
      <Contribution conticard={contrimage}/>
    </div>
  )
}

export default Main