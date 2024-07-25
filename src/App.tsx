import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./Homepage";
import Authentication from "./authentication/Authentication";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./app/store";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      }
    });
  }, []);

  const user = useSelector((state: RootState) => state.data.user);

  return (
    <div className="app">
      {user.userName ? <Homepage /> : <Authentication />}
    </div>
  );
}

export default App;
