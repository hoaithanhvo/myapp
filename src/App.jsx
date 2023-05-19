// import logo from './logo.svg';
// import { Link } from 'react-router-dom';
// import './App.css';
import background from "./img/Vector (1).png"
import login from "./img/sign_up--01 1.png"
import Facebook from "./img/Group.png"
import Google from "./img/search 1.png"
import styles from "./App.module.scss"
import Form from "./components/form/Form"
import Abc from "./pages/PageCreateAccount/CreateAccount"
// import { Link } from 'react-router-dom';
function App() {
  return (
    <div className={styles.app}>
      <div className={styles.box}>
        <div className={styles.background}>
          <img className={styles.background1} src={background}>
          </img>
          <img className={styles.login} src={login} alt=""></img>
        </div>
        <div className={styles.main}>
          <Form />
          {/* <Abc /> */}
          <button className={styles.button}><img src={Facebook} alt=""></img><span>Continue with Facebook</span></button>

          <br></br>
          <button className={styles.button}><img src={Google} alt=""></img><span>

            Continue with Google</span></button>
        </div>


      </div>
    </div>
  );
}

export default App;
