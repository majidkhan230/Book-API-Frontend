import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
<div className="w-full ">
  <Header/>
  <div className="main">
 <Outlet/>
  </div>
  <Footer/>
</div>
  )
}

export default App