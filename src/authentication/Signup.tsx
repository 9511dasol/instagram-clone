import React, { useState } from "react";
import "./Signup.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

interface ChildComponentProps {
  SetActive: React.Dispatch<React.SetStateAction<string>>;
}


function Signup({SetActive}: ChildComponentProps) {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handlesignup = () => {
    if (password.length < 6){
      console.error("Password sholud be at least 6 characters!!");
      alert("Password sholud be at least 6 characters!!");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
      })
      .then(() => {
        if (auth.currentUser) {
          return updateProfile(auth.currentUser, { displayName: username });
        } else {
          throw new Error("No user is currently signed in");
        }
      })
      .then(() => {
        console.log("User signed up and profile updated");
      })
      .catch((error) => {
        console.error("Error signing up or updating profile:", error);
      });
      setEmail('');
      setUsername('');
      setPassword('');
      SetActive('login');
  };

  return (
    <div className="signup">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="이메일"
        value={email}
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="이름"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="비밀번호"
        value={password}
      />
      <button onClick={handlesignup}>Sign up</button>
    </div>
  );
}

export default Signup;
