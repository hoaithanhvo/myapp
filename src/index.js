import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThereProvider } from './components/ThereProvider';
import CreateAccount from "./pages/PageCreateAccount/CreateAccount.jsx"
import Home from "./pages/PageHome/Home.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <FormCreate> */}
      <ThereProvider>


        <Routes>
          <Route path='/' element={<App />} />
          <Route path='Create' element={<CreateAccount />} />
          <Route path='Home' element={<Home />} />


        </Routes>
        {/* </FormCreate> */}
        {/* <App /> */}
      </ThereProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
