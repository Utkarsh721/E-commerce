import { Fragment, useState } from "react";
import styles from "./auth.module.css";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/Login.jpg";
import Card from "../Component/Card";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../reducer/asyncAuthReducer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();

    const loginDetail = {
      email: email,
      password: password,
    };
    console.log(loginDetail);
    dispatch(userLoginAction(loginDetail));
    navigate("/");
  };

  const register = () => {
    navigate("/register");
  };
  const resetPassword = () => {
    navigate("/reset");
  };
  return (
    <Fragment>
      <section className={styles.auth}>
        <Card>
          <div className={styles.form}>
            <h2>Login</h2>
            <form onSubmit={loginHandler}>
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
              <button
                type="submit"
                className="--btn --btn-primary 
              --btn-block"
              >
                Login
              </button>

              <button onClick={resetPassword} className={styles.btn1}>
                Forget Password
              </button>
              <button onClick={register} className={styles.btn2}>
                Register
              </button>
            </form>
          </div>
        </Card>
        <div className={styles.img}>
          <img src={loginImg} alt="Login" width="400" />
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
