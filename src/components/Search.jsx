import roni from '../assets/roni.png'
const Search = () => {
  return (
    <div className="search">
      <div className="search_form">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="user_chat">
        <img src={roni} alt="" />
        <div className='userChat_info'>
          <span>Rony</span>
        </div>
      </div>
    </div>
  )
}

export default Search