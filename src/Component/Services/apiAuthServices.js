import { toast } from "react-toastify";

class apiAuthServices {
  BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";
  Web_Api_Key = "AIzaSyCEHocTUyA1ZgSbYqOi5n2n28z-nzepeFY";
  static getInstance() {
    return new apiAuthServices();
  }
  signUp = async (credential) => {
    console.log(3, credential);
    const response = await fetch(
      this.BASE_URL + "signUp?key=" + this.Web_Api_Key,
      {
        method: "POST",
        body: JSON.stringify({
          email: credential.email,
          password: credential.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(4, data);
      return data;
    } else {
      const data = await response.json();
      console.log(data.error.message);
    }
  };
  login = async (credential) => {
    console.log(3, credential);
    const response = await fetch(
      this.BASE_URL + "signInWithPassword?key=" + this.Web_Api_Key,
      {
        method: "POST",
        body: JSON.stringify({
          email: credential.email,
          password: credential.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(4, data);
      return data;
    } else {
      const data = await response.json();
      console.log(data.error.message);
    }
  };
  getUserProfile = async () => {
    // console.log("Heelo world");
    const idToken = localStorage.getItem("idToken");
    const response = await fetch(
      this.BASE_URL +  "lookup?key=" + this.Web_Api_Key,
      {
        method: "POST",
        body: JSON.stringify({ idToken }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      // console.log(response);
      //   toast.success("Got data Successfully");
      const data = await response.json();
      return data;
    } else return;
  };


  updateProfile = async (credentials) => {
    // console.log("3,inServices", credentials);
    const idToken = localStorage.getItem("idToken");
    const response = await fetch(
      this.BASE_URL + "update?key=" + this.Web_Api_Key,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
          displayName: credentials.name,
          photoUrl: credentials.photoUrl,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      toast.success("Your profile is Updated");
      // console.log("4", data);
      return data;
    }
    {
      const data = await response.json();
      let errorMessage = "Authentication Failed";
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
        toast.error(errorMessage);
      }
    }
  };


  forgetPassword = async (credential) => {
    console.log(3, credential);
    const response = await fetch(
      this.BASE_URL + "sendOobCode?key=" + this.Web_Api_Key,
      {
        method: "POST",
        body: JSON.stringify({
          email: credential.email,
          requestType: "PASSWORD_RESET",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(4, data);
      return data;
    }
  };
  getUserData = async () => {
    console.log(3);
    const idToken = localStorage.getItem("idToken");
    console.log(idToken);
    const response = await fetch(
      this.BASE_URL + "lookup?key=" + this.Web_Api_Key,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(4, data);
      return data.users[0];
    }
  };
}

export const apiAuthService = apiAuthServices.getInstance();
