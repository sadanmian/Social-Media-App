import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>The Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit
            enim, nihil laboriosam ducimus eius magni saepe tenetur ratione cum
            rem deserunt provident reprehenderit illo eos ad neque sapiente et?
          </p>
          <span>Don't you have an account?</span>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
