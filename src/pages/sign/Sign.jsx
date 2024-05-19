import "./sign.scss";

import React, { useState } from "react";

import axios from "../../api";
import loginImg from "../../assets/images/login.svg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Sign() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");
  const [loading, setLoading] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    let user = {
      username,
      password,
    };

    setLoading(true);
    axios
      .post(`auth/login`, user)
      .then((res) => {
        console.log(res);
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
        toast.error("ERROR");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="container">
      <div className="login">
        <div className="login__left">
          <img src={loginImg} alt="" />
        </div>
        <div className="login__right">
          <h2 className="login__title">Log in to Exclusive</h2>
          <p className="login__desc">Enter your details below</p>
          <form onSubmit={handleLogin} className="form" action="">
            <input
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="username"
              type="text"
            />
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password"
              type="password"
            />
            <div className="login__btns">
              <button disabled={loading} className="login__btn">
                {loading ? "loading.." : "Log In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Sign;
