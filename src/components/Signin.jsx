import React, { useRef } from "react";
import classes from "./Signin.module.css";
import { auth } from "./firebasefile";
function Signin() {
  const emailRef = useRef();
  const passRef = useRef();

  const signInHandler = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(emailRef.current.value, passRef.current.value)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const register = (event) => {
    event.preventDefault();
    console.log(emailRef.current.value);
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className={classes.singinScreen}>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passRef} placeholder="Password" type="password" />
        <button onClick={signInHandler} type="submit">
          Sign In
        </button>
        <h4>
          <span className={classes.singinScreen__gray}>New to Netflix? </span>
          <span className={classes.singinScreen__link} onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default Signin;
