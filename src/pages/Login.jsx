const Login = () => {
  return (
    <div className="form_container">
       <div className="form_wrapper">
        <span className="logo">ChatVibe</span>
        <span className="title">Login</span>
        <form>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button>Sing in</button>
        </form>
        <p>Don't you have an account? Register</p>
        </div> 
    </div>
  )
}

export default Login