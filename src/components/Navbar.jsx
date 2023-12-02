import roni from '../assets/roni.png'
const Navbar = () => {
  return (
    <div className="navbar">
      <span className='logo'>ChatVibe</span>
      <div className="user">
        <img src={roni} alt="" />
        <span>Rony</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar