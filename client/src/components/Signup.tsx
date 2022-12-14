import axios from "axios";
import React, { useState } from "react";

export default function Signup(): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const hadleNameValue = (e: any) => {
    setName(e.target.value);
  };

  const hadleEmailValue = (e: any) => {
    setEmail(e.target.value);
  };

  const hadlePwValue = (e: any) => {
    setPassword(e.target.value);
  };

  const hadlePwCheckValue = (e: any) => {
    setPasswordCheck(e.target.value);
  };

  const hadleSubmit = (e: any) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setPasswordCheck("");
  };

  const val = {
    name,
    email,
    password,
    passwordCheck,
  };

  //   const signup = async () => {
  //     await axios.post(url, val);
  //   };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            이름
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={name}
            onChange={hadleNameValue}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            이메일
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={hadleEmailValue}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            비밀번호
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={hadlePwValue}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            비밀번호 확인
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={passwordCheck}
            onChange={hadlePwCheckValue}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={hadleSubmit}>
          회원가입
        </button>
      </form>
    </div>
  );
}
