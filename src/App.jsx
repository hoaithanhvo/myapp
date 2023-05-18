// import logo from './logo.svg';
// import { Link } from 'react-router-dom';
import './App.css';
import background from "./img/Vector (1).png"
import login from "./img/sign_up--01 1.png"
import Facebook from "./img/Group.png"
import Google from "./img/search 1.png"


import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <div className='box'>
        <div className='background'>
          <img className='background1' width={655} height={682} src={background}>
          </img>
          <img className='login' src={login}></img>
        </div>

        <div className='login1'>
          <h2 style={{ fontWeight: "700", fontSize: "43px", lineHeight: "54px", marginTop: "101px" }}> Login</h2>
          <p style={{ fontSize: "29px", fontWeight: "500" }}>Don't have an account? <Link style={{ color: "#FE904B" }} to="Create">Create Now</Link></p>
          <form>
            <p style={{ fontSize: "22px", fontWeight: "400" }}>
              Email
            </p>
            <input style={{ width: "560px", height: "71px", border: "2.38px solid #207198", borderRadius: "15px" }}></input>
            <p style={{ fontSize: "22px", fontWeight: "400" }}>
              Password
            </p>
            <input type='password' style={{ width: "560px", height: "71px", border: "2.38px solid #207198", borderRadius: "15px" }}></input>

            <br></br>
            <button style={{ marginTop: "31px", width: "560px", height: "71px", border: "2.38px solid #EE5757", borderRadius: "15px", backgroundColor: "#FE904B", fontSize: "22px", color: "white", fontWeight: "700" }}>Login</button>
            <p style={{ fontSize: "19px ", lineHeight: "29px", fontWeight: "400" }}>Forgot a password?</p>
            <p style={{ width: "560px", textAlign: "center", fontSize: "28px", fontWeight: "700", lineHeight: "34px" }}>Or</p>
            <button class="button-facebook"><img style={{ marginRight: "15px" }} src={Facebook}></img><span>

              Continue with Facebook</span></button>

            <br></br>
            <button class="button-facebook"><img style={{ marginRight: "15px" }} src={Google}></img><span>

              Continue with Google</span></button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;