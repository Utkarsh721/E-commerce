import styles from "./auth.module.css";
import { Link } from "react-router-dom";
import Card from "../Component/Card";
import resetImg from "../assets/forget.jpg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userForgetpasswordAction } from "../reducer/asyncAuthReducer";

const Reset = () => {
  const [email, setEmail] = useState("");
  const dispatch=useDispatch();
  
const resetHandler = (event) => {
  event.preventDefault();
  const UserEmail = {
    email: email,

  };
  console.log(UserEmail)
  dispatch(userForgetpasswordAction({email: email}));
//   firebaseResetHandler(User);
// };
// const firebaseResetHandler = async (User) => {
//   const response = await fetch(
//     "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCEHocTUyA1ZgSbYqOi5n2n28z-nzepeFY",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         email: User.email,
       
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   if (response.ok) {
//     const data = await response.json();
//     console.log(data);
//   } else {
//     const data = await response.json();
//     console.log(data.error.message);
//   }
};
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={resetImg} alt="Reset Password" width="400px" />
      </div>

      <Card>
        <div className={styles.form}>
          <h2>Reset Password</h2>
          <form >
            <input 
            type="text" 
            placeholder="Email"
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

            <button
              className="--btn --btn-primary 
            --btn-block" onClick={resetHandler} >
              Reset Password
            </button>

            <div className={styles.links}>
              <p>
                <Link to="/login">- Login</Link>
              </p>
              <p>
                <Link to="/register">- Register</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
};
export default Reset;
