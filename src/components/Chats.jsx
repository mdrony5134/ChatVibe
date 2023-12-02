import roni from '../assets/roni.png'
const Chats = () => {
  return (
    <div className="chats">
       <div className="user_chat">
        <img src={roni} alt="" />
        <div className='userChat_info'>
          <span>Rony</span>
          <p>Hello</p>
        </div>
      </div>
       <div className="user_chat">
        <img src={roni} alt="" />
        <div className='userChat_info'>
          <span>Rony</span>
          <p>Hello</p>
        </div>
      </div>
       <div className="user_chat">
        <img src={roni} alt="" />
        <div className='userChat_info'>
          <span>Rony</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats