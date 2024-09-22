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
    </section>
  );
}

export default Auth;
