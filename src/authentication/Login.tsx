import React, { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).catch((err) => {
      alert("아이디 또는 비빌번호가 틀립니다.");
      setEmail("");
      setPassword("");
    });
  }
  const enter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      handleLogin();
    }
  }
  return (
    <div className="login">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={enter}
        type="email"
        placeholder="이메일"
        value={email}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={enter}
        type="password"
        placeholder="비밀번호"
        value={password}
      />
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}

export default Login;
