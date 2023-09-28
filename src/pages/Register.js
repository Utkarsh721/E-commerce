import { Fragment, useState } from "react";
import styles from "./auth.module.css";
import registerImg from "../assets/register.jpg";
import { Link } from "react-router-dom";
import Card from "../Component/Card";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Loader from "../Component/Loader";
import { userSignupAction } from "../reducer/asyncAuthReducer";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setConfirmPass] = useState("");
 

  const registerUser = (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
      cPassword: cPassword,
    };
    dispatch(userSignupAction(newUser));
    setEmail("");
    setPassword("");
  };

  // const firebaseSignUpHandler = async (newUser) => {
  //   const response = await fetch(
  //     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEHocTUyA1ZgSbYqOi5n2n28z-nzepeFY",
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         email: newUser.email,
  //         password: newUser.password,
  //         returnSecureToken: true,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   if (response.ok) {
  //     const data = await response.json();
  //     console.log(data);
  //     
  //   } else {
  //     const data = await response.json();
  //     console.log(data.error.message);

  //     setIsLoading(false);
  //   }
  // };
  return (
    <Fragment>
      <ToastContainer />
        {/* <Loader /> */}
      <section className={`container ${styles.auth}`}>
        <Card>
          <div className={styles.form}>
            <h2>Register</h2>
            <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={cPassword}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
              <button
                type="submit"
                className="--btn --btn-primary 
              --btn-block"
              >
                Register
              </button>
            </form>
            <span className={styles.register}>
              <p>Already an account?</p>
              <Link to="/login">Login</Link>
            </span>
          </div>
        </Card>
        <div className={styles.img}>
          <img src={registerImg} alt="Register" width="400px" />
        </div>
      </section>
    </Fragment>
  );
};

export default Register;