import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import {Outlet} from 'react-router-dom'
import {ClerkProvider} from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

function Rootlayout() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <div>
        <Header/>
        <div style={{minHeight:"100vh"}}>
            <Outlet/>
        </div>
        <Footer/>
    </div>
    </ClerkProvider>
  )
}

export default Rootlayout