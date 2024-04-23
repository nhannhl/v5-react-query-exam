import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function DefaultLayout() {
  return (
    <div>
      <h1>DefaultLayout</h1>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default DefaultLayout