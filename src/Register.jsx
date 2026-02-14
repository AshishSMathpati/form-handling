import React, { useState } from "react";
import "./Register.css";
export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    course: "",
    terms: false
  });
  const [error, setError] = useState("");
  const change = (e) => {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value
    });
  };
  const submit = (e) => {
    e.preventDefault();
    if (
      data.name === "" ||
      data.email === "" ||
      data.password === "" ||
      data.gender === "" ||
      data.course === "" ||
      data.terms === false
    ) {
      setError("Please fill all fields");
    }
    else {
      setError("");
      alert("Registration Successful");
      console.log(data);
    }
  };
  const reset = () => {
    setData({
      name: "",
      email: "",
      password: "",
      gender: "",
      course: "",
      terms: false
    });
    setError("");
  };
  return (
    <div className="box">
      <form onSubmit={submit}>
        <h2>Register Form</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={data.name}
          onChange={change}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={data.email}
          onChange={change}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={data.password}
          onChange={change}
        />
        <div>
          Gender :
          <input type="radio" name="gender" value="Male" onChange={change} /> Male
          <input type="radio" name="gender" value="Female" onChange={change} /> Female
        </div>
        <select name="course" onChange={change} value={data.course}>
          <option value="">Select course</option>
          <option>BCA</option>
          <option>BTech</option>
          <option>MCA</option>
        </select>
        <div>
        <input
          type="checkbox"
          name="terms"
          onChange={change}
          checked={data.terms}
          />
          Accept terms
        </div>
        <p className="error">{error}</p>
        <button type="submit">Register</button>
        <button type="button" onClick={reset}>Reset</button>
      </form>
    </div>
  );
}