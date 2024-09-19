import React from 'react'
import './eduLens.css'
import Landing from '../../../main/components/landing/Landing'
import Numbers from '../../../main/components/Numbers/Numbers'
import Educard from './educard/Educard'
import lenspic from '../../assets/Edulenspic.png'
// import lens1 from '../../assets/lens1.png'
// import lens2 from '../../assets/lens2.jpg'
// import lens3 from '../../assets/lens3.jpg'
// import lens4 from '../../assets/lens4.jpg'
// import lens5 from '../../assets/edu5.jpg'
// import lens6 from '../../assets/lens6.jpg'
// import lens7 from '../../assets/lens7.jpg'




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
//   name: " منحة الحكومة الإيطالية - The Italian Government Scholarship",
//   url: "https://t.me/EduLens_Podcast/4",
// },
// {
//   img:lens2,
//   name: 'منحة جسور & رون ويليمس في جامعة كامبردج - Jusoor & Rowan Williams Cambridge Studentship',
//   description: 'منحة جسور & رون ويليمس في جامعة كامبردج - Jusoor & Rowan Williams Cambridge Studentship',
//   url: 'https://t.me/EduLens_Podcast/11'
//   }, 
// {
//   img:lens3,
//   name: ' منحة الـ دااد - DAAD Scholarship',
//    description: 'منحة الـ دااد -DAAD Scholarship',
//     url: 'https://t.me/EduLens_Podcast/15', 
// },
// {
//   img:lens4,
//   name: ' منحة إيراسموس موندوس - Erasmus Mundus Scholarship',
//   description: 'منحةإيراسموس موندوس - Erasmus Mundus Scholarship',
//   url: 'https://t.me/EduLens_Podcast/20',
//   },
//   {
//   img:lens5,
//   name: 'منحة الحكومة الهنغارية  _ Hungarian Scholarship',
//   description: 'منحة الحكومة الهنغارية  _ Hungarian Scholarship',
//   url: 'https://t.me/EduLens_Podcast/25',
//   },
//   {
//   img:lens6,
//   name: 'منحة مجلس الأبحاث الاجتماعية والاقتصادية في بريطانيا لمرحلة الدكتوراة - Economic and Social Research Council (for PhD in the UK)',
//   description: 'منحة مجلس الأبحاث الاجتماعية والاقتصادية في بريطانيا لمرحلة الدكتوراة - Economic and Social Research Council (for PhD in the UK)',
//   url: 'https://t.me/EduLens_Podcast/29',
//   },
//   {
//   img:lens7,
//   name: ' منحة التميز ايفل بفرنسا - The Eiffel Excellence Scholarship (France)',
//   description: 'منحة التميز ايفل بفرنسا - The Eiffel Excellence Scholarship (France)',
//   url: 'https://t.me/EduLens_Podcast/36',
//   }
  
//  ]


const lensnumtitle='EduLens in Numbers';
const numoption = [
  {title:"Episodes", num: 15},
  {title: "Hours of Content", num: 15}
];

  return (

    <>
        <Landing data={lensdata}/>
        <Educard />
        <Numbers  title={lensnumtitle} numoptions={numoption}/>

      
    </> 
  )
}

export default EduLens