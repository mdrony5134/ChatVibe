import roni from "../assets/roni.png"
const Message = () => {
  return (
    <div className="message owner">
      <div className="message_info">
        <img src={roni} alt="" />
        <span>Just now</span>
      </div>
      <div className="message_content">
        <p>Hello</p>
        <img src={roni} alt="" />
      </div>
    </div>
  )
}

export default Message