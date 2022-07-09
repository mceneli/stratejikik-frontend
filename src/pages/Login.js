import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../styles.css";
import {useNavigate} from "react-router";
import {useEffect} from "react";

require('dotenv').config();

function Login() {
  const [messages, setMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const backendUrl = process.env.REACT_APP_BACKEND_PATH + "/users/login";
	const user = { username: event.target.uname.value
                      ,password: event.target.pass.value };
    fetch(backendUrl,{
     method:"POST",
     headers:{
      "Content-type":"application/json"
     },
     body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
          localStorage.setItem("token",data.token)
          alert(localStorage.getItem('token'));
    })
  };

  //error message
  const renderMessage = (name) =>
    name === messages.name && (
      <div className="msg">{messages.message}</div>
    );

  //login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Kullanıcı Adı </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Şifre</label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div>
          {renderMessage("msg")}
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Giriş Yap</div>
        {isSubmitted ? <div>Giriş Yapıldı.</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;
