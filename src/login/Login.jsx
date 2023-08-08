
import { Link } from "react-router-dom";
import style from "./login.module.css";

function Login() {
    return ( 
      <div>
         <div>
      <div>
      <header>
      <nav>
      <p id="logo">GALANA</p>
          <ul>
         
   <li><Link to='/' id="link">Home</Link></li>
 <li> <Link to='/signup' id="link">Register</Link></li>
 <li> <Link to='/login' id="link">Login</Link></li>
          </ul>
      </nav>
      </header>
      </div>

        <div id={style.loginBody}>
        <div className={style.login}>
      <h1 className="logo">GALANA</h1>
      <h2>Log In</h2>
      <form>
      <label className={style.label} for="fname">Email:</label>
      <br/>
      <input type="email" id="email" name="email" placeholder="Email" className={style.input}></input><br/>
    <br/>
    
      <label for="password" className={style.label} >Password:</label>
      <br/>
      <input type="password" id="password" name="password" placeholder="Password" className={style.input} ></input><br/>
      
    <br/>
      <button className={style.loginButton} >Log In</button>
     <br/>
     <div className="line"></div>
     <Link to = "/signup">Create New Account </Link>
    
    </form>
    </div>
      </div>
      </div>
      </div>
    )
        }
    


export default Login;
 