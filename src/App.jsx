import { Outlet } from 'react-router-dom'
import {useEffect} from 'react'
import './App.css'
import { Toaster } from 'react-hot-toast';
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import './index.css'

function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Toaster/>
    <Footer/>
    </>
  )
}

export default App
