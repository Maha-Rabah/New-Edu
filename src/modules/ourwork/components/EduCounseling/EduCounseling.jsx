import './eduCounseling.css'
import React from 'react'
import Landing from '../../../main/components/landing/Landing'
import { useState } from 'react'
import Numbers from '../../../main/components/Numbers/Numbers'
import Features from '../Features/Features'
import feat3 from '../../assets/yellfat1.png'
import feat2 from '../../assets/yfeat2.png'
import feat1 from '../../assets/yfeat3.png'
import counpic from '../../assets/educounpic.png'

const EduCounseling = () => {


  const coundata={
    homepic:counpic,
    title:'EduCounseling program',
    desc:'A Counseling program for individuals currently applying for scholarships and seeking assistance in assessing their application files or preparing for scholarship interviews.',
    true:false,
  }

  
  /////////////////////////////////////////////////

  const numoption = [
    {title: "Counseling sessions", num: 9},
    {title: "Essays revieweds", num: 3},
    {title: "Mock interviews", num: 2},
    ];
  const contitle =['EduCounseling in Numbers']
  
  ////////////////////////////////////////////////////
  const featuredata=[
    {
  counlink:'https://forms.gle/dSZYtHmCXQGb5FHHA',
  pink:true,
  icon:feat1,
  titlefeature:'Essay Review',
  caption:'Expert help in refining application essays for scholarship submissions.',
    },

    {
  counlink:'https://forms.gle/rmVTyUaz3mYG33En7',
    pink:true,
    icon:feat2,
    titlefeature:'Interview Prep',
    caption:'Conducting mock interviews to prepare candidates for scholarship interviews.',
      },

      {
    counlink:'https://forms.gle/JJPAfPdLrrFRcaKh8',
    pink:true,
    icon:feat3,
    titlefeature:'Counseling Session',
    caption:'A 30-minute video session designed to assist you on your scholarship journey.',
        },
        
  ]
  return (
  
    <>
        <Landing data={coundata}/>
         <Features featurecard={featuredata} featuretit={false} buttoncard={'Apply'}/>
        <Numbers  title={contitle} numoptions={numoption}/>
    </>
  )
}

export default EduCounseling