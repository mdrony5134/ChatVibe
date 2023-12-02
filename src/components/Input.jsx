import img from "../assets/img.png"
import attach from '../assets/attach.png'
const Input = () => {
  return (
    <div className="input">
        <input type="text" placeholder="Type something..." />
        <div className="send">
            <input type="file" id="file" style={{display: "none"}}/>
            <label htmlFor="file">
                <img src={attach} alt="attachFile" />
            </label>
            <img src={img} alt="" />
            <button>Send</button>
        </div>
    </div>
  )
}

export default Input