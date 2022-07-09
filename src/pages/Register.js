import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../styles.css";
require('dotenv').config();

function Register() {
  const [messages, setMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

  const backendUrl = process.env.REACT_APP_BACKEND_PATH + "/users/add";
	const user = { username: event.target.uname.value
                ,password: event.target.pass.value };
        setIsSubmitted(true)
        axios.post(backendUrl, user)
        .catch(error => {
          alert("Hata Oluştu"+error)
          setIsSubmitted(false)
        })
  };

  //error message
  const renderMessage = (name) =>
    name === messages.name && (
      <div className="msg">{messages.message}</div>
    );

  //register form
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
        <div className="title">Kayıt Ol</div>
        {isSubmitted ? <div>Kayıt olundu.</div> : renderForm}
      </div>
    </div>
  );
}

export default Register;
