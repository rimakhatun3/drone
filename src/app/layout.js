import Navbar from "@/components/Navbar"
import './globals.css'
import Footer from "@/components/Footer"


export const metadata = {
  title: 'Drone',
  description: 'drone website',
}

const RootLayout=({ children })=> {
  return (

    <html>
      <body>
        <Navbar/>
        {children}
        <Footer/>
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
