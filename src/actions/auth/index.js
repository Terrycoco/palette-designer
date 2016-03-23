import C from 'lib/constants';
import Firebase from 'firebase';
const ref = new Firebase(C.FIREBASE);

export function signInWithGithub() {
  return authenticate('github');
}

function authenticate(provider) {
  return (dispatch, getState) => {  
    // we return a thunk function, not an action object!
    // the thunk function needs to dispatch some actions to change
    // the Store status, so it receives the "dispatch" function as its
    // >first parameter
    ref.authWithOAuthPopup(provider, (error, authData) => {
      if (error) {
        console.error('ERROR @ authWithOAuthPopup :', error); // eslint-disable-line no-console
      }
      else {
        dispatch({
          type: SIGN_IN_SUCCESS,
          payload: authData,
          meta: {
            timestamp: Date.now()
          }
        });
      }
    });
  };
}
// export const CREATE_USER = "CREATE_USER";
// export function createUser(name, email, password) {
//   const request = ref.createUser(email, password)
//     .then(
//       console.log('got here');
//       //creating user doesn't login
//       //now log in
//       ref.authUser(email, password)
//       .then(
//         console.log('got here too');
//         return {
//
//         }
//       );
//     );
// }
// // 1
// self.ref.createUser(emailField.text, password: passwordField.text) { (error: NSError!) in
//   // 2
//   if error == nil {
//     // 3
//     self.ref.authUser(emailField.text, password: passwordField.text,
//         withCompletionBlock: { (error, auth) -> Void in
//       // 4
//     })
//   }
// }

// export function createPost(props) {
//   const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
//
//   return {
//     type: CREATE_POST,
//     payload: request
//   };
// };
//


export const LOGIN_ANONYMOUS = 'LOGIN_ANONYMOUS';
export function loginAnonymous() {
  const request = ref.authAnonymously(( error, authData) => {
    if (authData) {
      return authData.uid;
    } else {
      return error;
    }
  });
  return {
    type: LOGIN_ANONYMOUS,
    payload: request
  };
}

// export const LOGOUT = "LOGOUT";
// export function logout() {
//   const request = ref.unAuth();
//   return {
//     type: LOGGED_OUT
//   };
// }
//
//
// export function fetchPalettes() {
//   let palettesArr = [];
//   const request = palettesNode.once('value')
//       .then((snapshot) => {
//         snapshot.forEach(function(ss) {
//           palettesArr.push(ss.val());
//         });
//         return palettesArr;
//     });
//
//     return {
//         type: FETCH_PALETTES,
//         payload: request
//     }
// }
//

// // Create a callback which logs the current auth state
// function authDataCallback(authData) {
//   if (authData) {
//     console.log("User " + authData.uid + " is logged in with " + authData.provider);
//   } else {
//     console.log("User is logged out");
//   }
// }
// // ref.onAuth(function(authData){
// //     if (authData) {
// //         return {
// //             type: C.LOGIN_USER,
// //             uid: authData.uid,
// //             username: authData.github.displayName || authData.github.username
// //         };
// //     } else {
// //         // if (getState().auth.currently !== C.ANONYMOUS){ // log out if not already logged out
// //           return {type:C.LOGOUT};
// //   }
// // });
//
// export const LISTEN_AUTH = 'LISTEN_AUTH';
// // called at app start - will list for auth changes
// export function listenAuth() {
//   ref.onAuth((authData) => {
//     if(authData) {
//       return {
//         type: C.LOGIN_USER,
//         uid: authData.uid,
//         // username: authData.github.displayName || authData.github.username
//       };
//     } else {
//       return {type: C.LOGOUT};
//     }
//   });
// }
//
// export const END_AUTH = "END_AUTH";
// export function endAuth() {
//   ref.offAuth( () => {
//     return {
//       type: C.LOGOUT
//     };
//   });
// }
//
//
// export function attemptLogin(){
//     {type:C.ATTEMPTING_LOGIN});
//       fireRef.authWithOAuthPopup("github", function(error, authData) {
//           if (error) {
//               dispatch({type:C.DISPLAY_ERROR, error:"Login failed! "+error});
//               dispatch({type:C.LOGOUT});
//           } else {
//               // no need to do anything here, startListeningToAuth have already made sure that we update on changes
//           }
//       });
//   };
// }
//
// //don't think i need this - can use promises
// export function attemptLogin(username, email, password) {
//   //need password AND (either uname or email)
//   //query to see if email is there- if so check password
//   //else check to see if username is taken if so error try again
//   //else create new user
//   return {
//     type: C.ATTEMPTING_LOGIN
//   };
// }
//
// export function loginUser() {
//   //DO SOMETHING HERER
//     return {
//       type: C.LOGIN_USER,
//       username: username,
//       uid: uid
//     };
// }

//   const request = ref.onAuth(function(authData) {
//     if (authData) {
//       ref.child("users").child(authData.uid).set({
//         provider: authData.provider,
//         username: name
//       });
//     }
//   });
// }

//
// ref.createUser({
//   email    : "bobtony@firebase.com",
//   password : "correcthorsebatterystaple"
// }, function(error, userData) {
//   if (error) {
//     console.log("Error creating user:", error);
//   } else {
//     console.log("Successfully created user account with uid:", userData.uid);
//   }
// });
