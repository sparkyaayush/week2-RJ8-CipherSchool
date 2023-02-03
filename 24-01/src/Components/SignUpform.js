import React, { useRef, useState } from "react";
import { isValidator } from "../Validators";
// import { Routes, Route } from "react-router-dom";
import { Link , Outlet} from "react-router-dom";
// import SumNumbers from "./SumNumbers";
const SignUpform = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error , setError] = useState("");
  const passwordElement = useRef(null);
  let handleChange = (e) =>
    setState({ ...setState, [e.target.name]: e.target.value });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (
          isValidator({
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            password: state.password,
          })
        ) {
          console.log("User is valid!");
        } else{
          setError("the user is invalid")
          console.log("user is invalid")
        }
      }}
    >
      <label>First Name</label>
      <input
        name={"firstName"}
        type={"text"}
        onChange={handleChange}
        value={state.firstName}
        placeholder={"First Name"}
      />
      <label>Last Name</label>
      <input
        name={"lastName"}
        type={"text"}
        onChange={handleChange}
        value={state.lastName}
        placeholder={"Last Name"}
      />
      <label>Email</label>
      <input
        name={"email"}
        type={"email"}
        onChange={handleChange}
        value={state.email}
        placeholder={"Email"}
      />
      <label>Password</label>
      <input
        name={"password"}
        type={"password"}
        onChange={handleChange}
        value={state.password}
        placeholder={"Password"}
      />
      <button type={`submit`}>Submit</button>
      <span style={{color: "red"}}>{error}</span>
      {/* <Routes>
        <Route path={"/sum"} element={<SumNumbers/>}/>
      </Routes> */}
      <Link to={"sum"}>Sum Components</Link>
      <Outlet/>
    </form>
  );
};

export default SignUpform;
