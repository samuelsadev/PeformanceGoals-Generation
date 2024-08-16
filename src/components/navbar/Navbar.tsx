import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className="flex gap-4 mb-4">
      <ul className="flex gap-4 relative menu">
        <Link to="/home">
          <li style={{  }} className="text-lg font-medium cursor-pointer hover:text-zinc-500 hover:scale-110 transition-all">Home</li>
        </Link>
        <Link to="/home">
          <li className="text-lg font-medium cursor-pointer hover:text-zinc-500 hover:scale-110 transition-all">Produtos</li>
        </Link>
        <Link to="/home">
          <li className="text-lg font-medium cursor-pointer hover:text-zinc-500 hover:scale-110 transition-all">Sobre</li>
        </Link>
        <Link to="/home">
          <li className="text-lg font-medium cursor-pointer hover:text-zinc-500 hover:scale-110 transition-all">Contato</li>
        </Link>
      </ul>
    </div>

  )
}

export default Navbar