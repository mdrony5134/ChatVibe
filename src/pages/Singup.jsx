import add from "../assets/addAvatar.png"
const Singup = () => {
  return (
    <div className="form_container">
       <div className="form_wrapper">
        <span className="logo">ChatVibe</span>
        <span className="title">Register</span>
        <form>
            <input type="text" placeholder="Display name"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="file" id="file" style={{display: "none"}}/>
            <label htmlFor="file">
                <img src={add} alt="add file" />
                <span>add an avatar</span>
            </label>
            <button>Sing up</button>
        </form>
        <p>Do you have an account? Login</p>
        </div> 
    </div>
  )
}

export default Singup