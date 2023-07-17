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