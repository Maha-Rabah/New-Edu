import { Outlet } from 'react-router-dom'
import {useEffect} from 'react'
import './App.css'
import { Toaster } from 'react-hot-toast';
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import './index.css'
import AddMembersForm from './modules/forms/pages/AddMembersForm'
import AddEpisodes from './modules/forms/pages/AddEpisodes'
import AddBlogs from './modules/forms/pages/AddBlogs'
import AddStatistics from './modules/forms/pages/AddStatistics'

function App() {

  return (
    <>
    <AddStatistics/>
    {/* <Outlet/>
    <Toaster/>
    <Footer/> */}
    </>
  )
}

export default App
