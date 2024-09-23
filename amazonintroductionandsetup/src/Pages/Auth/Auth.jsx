import React, { useState,useContext } from 'react'
import classes from './SignUp.module.css'
import { Link } from 'react-router-dom';
import {auth} from '../../Utility/firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import { ClipLoader } from "react-spinners";
import {DataContext} from '../../Components/DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';


function Auth() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");
  const [loading,setLoading] = useState
({signIn:false,
  signup:false
});
  // console.log(password,email);

  const [{user},dispatch] = useContext(DataContext)
  console.log(user);
  
const authHandler = async(e) => {
  e.preventDefault();
  console.log(e.target.name);

  if (e.target.name == "signin") {
    // firebase aut
    setLoading({...loading,signIn:true})
    signInWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
       
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        })
           setLoading({ ...loading, signIn: true });
        
      })
      .catch((error) => {
        setError(error.message);
        setLoading({ ...loading, signIn: false });
      });
    
  }else{
     setLoading({ ...loading, signup: true });
createUserWithEmailAndPassword(auth, email, password).then((userInfo) => {
  
  dispatch({
    type: Type.SET_USER,
    user: userInfo.user,
  });
  setLoading({ ...loading, signup: false });
}).catch((error) => {
  setError(error.message);
  setLoading({ ...loading, signup: false });
})


  }
  };



  return (
    <section className={classes.login}>
      {/* logo  */}

      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>

      {/* form  */}
      <div className={classes.login__container}>
        <h1>Sign In</h1>
        <form action="">
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
            type="submit"
            onClick={authHandler}
            name="signIn"
            className={classes.login__signInButton}
          >
            {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              "signIn"
            )}
          </button>
        </form>
        {/* agreement */}
        <p>
          By continuing, you agree to Amazon fake clone's Conditions of Use and
          Privacy Notice.
        </p>
        {/* create account */}
        <button
          type="submit"
          name="signUp"
          onClick={authHandler}
          className={classes.login__registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
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
