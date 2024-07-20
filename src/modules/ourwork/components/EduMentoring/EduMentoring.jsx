import React from 'react'
import './eduMentoring.css'
import { useState } from 'react'
import Landing from '../../../main/components/landing/Landing.jsx'
import Numbers from '../../../main/components/Numbers/Numbers.jsx'
import Cohort from './Cohort/Cohort.jsx'
import Features from '../Features/Features.jsx'
import feat1 from '../../assets/feature1.png'
import feat2 from '../../assets/feature2.png'
import feat3 from '../../assets/feature3.png'
import mentpic from '../../assets/mentopic.png'


const EduMentoring = () => {
  
  const mendata={
    homepic:mentpic,
    title:'EduMentoring program',
    desc:'A mentoring program to support Syrian students in their pursuit of higher education abroad through mentoring and financial support.'
  }

   ////////////////////////////////////////////////////////////////
   const mentnumber = [200, 45, 18, 6]
    const mentoption = [
      {title:"Applicants", num: 200},
      {title: "Interviews", num: 45},
      {title: "Mentees", num: 18},
      {title: "Mentors", num: 6}];
    const mentonumtitle= "EduMentoring in Numbers";
   //////////////////////////////////////////////////////////////////

const featuredata=[
  {
icon:feat3,
titlefeature:'Bi-weekly Sessions with Mentors',
caption:'Bi-weekly mentoring sessions to secure scholarships with expert mentors.',
  },
  {
  icon:feat2,
  titlefeature:'IELTS/TOEFL Funding',
  caption:'Funding IELTS/TOEFL fees to eliminate financial barriers for students.',
    },
    {
  icon:feat1,
  titlefeature:'Monthly Speaker Session',
  caption:'Organize monthly speaker sessions during the program to share experiences with mentees.',
      },
      
]
  
  return (
    <div >
      <Landing data={mendata}/>
      <Features featurecard={featuredata} featuretit={true}/>
      <Numbers  title={mentonumtitle} numoptions={mentoption}/>
      <Cohort/>


    </div>
  )
}

export default EduMentoring

