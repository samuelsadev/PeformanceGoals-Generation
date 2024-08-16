import logo from '../../src/assets/logo.png'
import { Navbar } from '../components/navbar/Navbar'


function Header() {
  return (
    <header className="max-w-7xl flex items-center justify-between p-4 mx-auto">
      <img className="w-10" src={logo} alt="logo" />
      <Navbar />
    </header>
  )
}

export default Header