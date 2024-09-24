import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  // console.log(user);

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);

    if (e.target.name === "signin") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate("/");
        })
        .catch((error) => {
          setError(error.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate("/");
        })
        .catch((error) => {
          setError(error.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>

      <div className={classes.login__container}>
        <h1>Sign In</h1>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>

          <button
            type="button"
            onClick={authHandler}
            name="signin"
            className={classes.login__signInButton}
          >
            {loading.signIn ? <ClipLoader color="#000" size={15} /> : "sign In"}
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon fake clone's Conditions of Use and
          Privacy Notice.
        </p>

        <button
          type="button"
          name="signup"
          onClick={authHandler}
          className={classes.login__registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>

        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
