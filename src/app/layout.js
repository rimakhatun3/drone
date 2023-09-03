import Navbar from "@/components/Navbar"
import './globals.css'
import Footer from "@/components/Footer"


export const metadata = {
  title: 'Drone',
  description: 'drone website',
}

const RootLayout=({ children })=> {
  return (
   <div className="container mx-auto">
{/* <Navbar></Navbar> */}

<main>
{children}
</main>

<Footer/>
   </div>
  )
}

export default RootLayout
