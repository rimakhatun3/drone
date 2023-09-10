import Navbar from "@/components/Navbar"
import './globals.css'
import Footer from "@/components/Footer"

import {UserProvider} from '@auth0/nextjs-auth0/client'

export const metadata = {
  title: 'Drone',
  description: 'drone website',
}

const RootLayout=({ children })=> {
  return (

    <html>
      <body className="container mx-auto">
        <UserProvider>
        <Navbar/>
        {children}
        <Footer/>
        </UserProvider>
        
      </body>
    </html>
//    <div className="container mx-auto">
// <main>
// <Navbar></Navbar>


// {children}

// <Footer/>
// </main>
//    </div>
  )
}

export default RootLayout
