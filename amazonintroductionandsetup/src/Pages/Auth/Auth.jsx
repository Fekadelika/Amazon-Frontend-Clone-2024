import React from 'react'
import classes from './SignUp.module.css'
import { Link } from 'react-router-dom';


function Auth() {
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
            <input type="email" id="email" />

          </div>
          <div>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

         
            <button className={classes.login__signInButton}>Sign In</button>
         
        </form>
{/* agreement */}
<p>By continuing, you agree to Amazon fake clone's Conditions of Use and Privacy Notice.</p>
{/* create account */}
<button className={classes.login__registerButton}>Create your Amazon Account</button>


      </div>
    </section>
  );
}

export default Auth;
