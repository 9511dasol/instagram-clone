import React, { act, useState } from "react";
import "./Authentication.css";
import Login from "./Login";
import Signup from "./Signup";


function Authentication() {
  const [active, SetActive] = useState<string>('login');

  const handelChange = () =>{
    SetActive(active === 'login'? 'sign up!':'login');
  }
  return (
    <div className="authentication">
      <div className="auth__left">
        <img src="https://i.imgur.com/P3Vm1Kq.png" />
      </div>
      <div className="auth__right">
      {active === "login" ? 
      <Login />
      :
      <Signup SetActive={SetActive}/>}
        <div className="auth__more">
          <span>
            {active === "login" ? 
            <>Don't have an account ? <button onClick={handelChange}>Sign up</button></> 
            :
             <>Have an account ? <button onClick={handelChange}>Log in</button></>}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
