import { useState } from 'react'

import {Routes, Route} from 'react-router-dom'

import './App.css'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Card from './component/Card'
import Footer from './component/Footer'
import Gdoor from './component/Gdoor'
import Glasswin from './component/Glasswin'
import Grail from './component/Grail'
import Gstairs from './component/Gstairs'
import Scab from './component/Scab'
import Sdoor from './component/Sdoor'
import Skylet from './component/Skylet'
import Swin from './component/Swin'
import Ven from './component/Ven'
import Owin from './component/Owin'
import Contform from './component/Contform'
import About from './component/About'
import Scroll from './component/Scroll'
import Galcom from './component/Galcom'

function App() {
 

  return (
   <>
 <Navbar  />
 
   <Scroll  />
   <Routes>
  
    <Route path='/' element={<Home  />}  />
      <Route path='/about' element={<About  />}  />
    <Route path='/gdoor' element={<Gdoor  />}  />
    <Route path='/gwin' element={<Glasswin  />}  />
    <Route path='/grail' element={<Grail  />}  />
       <Route path='/gstair' element={<Gstairs  />}  />
    <Route path='/scab' element={<Scab  />}  />
    <Route path='/sdoor' element={<Sdoor  />}  />
       <Route path='/sky' element={<Skylet  />}  />
    <Route path='/swin' element={<Swin  />}  />
    <Route path='/ven' element={<Ven  />}  />
    <Route path='/owin' element={<Owin  />}  />
     <Route path='/cform' element={<Contform  />}  />
   <Route path='/gcom' element={<Galcom  />}  />
   </Routes>
   <Footer  />
   </>

  )
}

export default App
