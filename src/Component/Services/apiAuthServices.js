// class apiAuthServices{
//   BASE_URL="https://identitytoolkit.googleapis.com/v1/accounts:";
//   Web_Api_Key="AIzaSyCEHocTUyA1ZgSbYqOi5n2n28z-nzepeFY";
//   static getInstance() {
//     return   new apiAuthServices()
//       }
//       signUp=async(credential)=>{
//         console.log(3,credential);
//         const response =await fetch(this.BASE_URL+ "signUp?key="+ this.Web_Api_Key,{
//           method: "POST",
//           body: JSON.stringify({
//             email: newUser.email,
//             password: newUser.password,
//             returnSecureToken: true,
//           }),
//                   headers: {
//                     "Content-Type": "application/json",
//                   },
//                 }
//               );
//               if (response.ok) {
//                 const data = await response.json();
//                 console.log(data);
//                 toast.success("Registration Successful..")
//               } else {
//                 const data = await response.json();
//                 console.log(data.error.message);
          
//               }
//             }
//           }
          
//  export const apiAuthService=apiAuthServices.getInstance();
