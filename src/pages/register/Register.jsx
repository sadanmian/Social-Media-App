import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
        <div className="left">
          <h1>The Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit
            enim, nihil laboriosam ducimus eius magni saepe tenetur ratione cum
            rem deserunt provident reprehenderit illo eos ad neque sapiente et?
          </p>
          <span>Do you have an account?</span>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
