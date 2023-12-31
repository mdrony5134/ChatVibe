import Cam from "../assets/cam.png";
import Add from "../assets/add.png";
import More from "../assets/more.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat_info">
        <span>Rony</span>
        <div className="chat_icons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat