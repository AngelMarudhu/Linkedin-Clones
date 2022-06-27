// import { async } from "@firebase/util";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { signOut } from "firebase/auth";
import { SET_USER } from "./actionType";

const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

// signin.....................
export function signInApi() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
        console.log(payload.user);
      })
      .catch((error) => alert(error));
  };
}

// userdataget.........................
export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
        console.log(user);
      }
    });
  };
}

//signoutapi..............................

export function signOutApi() {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
