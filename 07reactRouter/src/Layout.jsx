import React from 'react'
import Header from './components/Header/Header'

import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
      
    </>
  )
}
//Ab isame header aur footer same rahega par jaha outlet likha hai wo bas change hoga uske jagha home wagerra aa jayenge par par upar aur niche header aur footer rahega
export default Layout
