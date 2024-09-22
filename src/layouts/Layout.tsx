import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main className='w-full min-h-screen bg-gray-800'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default Layout
