import React from 'react'
import './eduLens.css'
import Landing from '../../../main/components/landing/Landing'
import Numbers from '../../../main/components/Numbers/Numbers'
import Educard from './educard/Educard'
import lenspic from '../../assets/Edulenspic.png'
import lens1 from '../../assets/lens1.png'
import lens2 from '../../assets/lens2.jpg'
import lens3 from '../../assets/lens3.jpg'
import lens4 from '../../assets/lens4.jpg'


const EduLens = () => {

  const lensdata={
    homepic:lenspic,
    title:'EduLens Program',
    desc:'A series of podcast episodes featuring the Syrian experience in scholarships abroad and documenting their international education journey.',
    true:false
  }
///////////////////////////////////////////////////////////

// const edudata=[{
//   img:lens1,
//   name: "The Italian Government Scholarship _ منحة الحكومة الإيطالية",
//   url: "https://t.me/EduLens_Podcast/4",
// },
// {
//   img:lens2,
//   name: 'Jusoor & Rowan Williams Cambridge Studentship - منحة جسور & رون ويليمس في جامعة كامبردج',
//   description: 'Jusoor & Rowan Williams Cambridge Studentship - منحة جسور & رون ويليمس في جامعة كامبردج ',
//   url: 'https://t.me/EduLens_Podcast/11'
//   }, 
// {
//   img:lens3,
//   name: 'DAAD Scholarship - منحة الـ دااد',
//    description: 'DAAD Scholarship - منحة الـ دااد',
//     url: 'https://t.me/EduLens_Podcast/15', 
// },
// {
//   img:lens4,
//   name: 'Erasmus Mundus Scholarship - منحة إيراسموس موندوس',
//   description: 'Erasmus Mundus Scholarship - منحة إيراسموس موندوس',
//   url: 'https://t.me/EduLens_Podcast/20',
//   }
// ]


const lensnumtitle='EduLens in Numbers';
const numoption = [
  {title:"Episodes", num: 15},
  {title: "Hours of Content", num: 15}
];

  return (

    <>
        <Landing data={lensdata}/>
        <Educard/>
        <Numbers  title={lensnumtitle} numoptions={numoption}/>

      
    </> 
  )
}

export default EduLens