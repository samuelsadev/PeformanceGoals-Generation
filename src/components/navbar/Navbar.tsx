import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex gap-4 nb-4'>
    <h1>Navbar</h1>
    <Link to='/home'>Home</Link>
    </div>
  )
}

export default Navbar