import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../styles.css";
require('dotenv').config();

function Login() {
  const [messages, setMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    try{
    const backendUrl = process.env.REACT_APP_BACKEND_PATH + "/users/login";
	const user = { username: event.target.uname.value
                      ,password: event.target.pass.value };
        setIsSubmitted(true)
        const { data: res } =axios.post(backendUrl, user)
        localStorage.setItem("token", res.data);
        alert(res.message)
    }catch(error){
     alert(error+"###")
     setIsSubmitted(false)
    }
  };

  // Generate JSX code for error message
  const renderMessage = (name) =>
    name === messages.name && (
      <div className="msg">{messages.message}</div>
    );

  // JSX code for login form
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
