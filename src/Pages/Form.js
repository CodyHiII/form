import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FormStyles.css";

const Form = (props) => {
  const user = props.user;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      user.name === name &&
      user.email === email &&
      user.password === password
    ) {
      navigate("/userpage");
    } else {
      setFormError(true);
    }
  };

  let navigate = useNavigate();

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label>Username</label>
          <input
            type='text'
            name='username'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-field'>
          <label>Email</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-field'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div
          className={formError ? "form-error form-error-active" : "form-error"}
        >
          <p>Wrong username, email or password. Please try again!</p>
        </div>
        <div className='form-btn'>
          <button type='submit'>Submit</button>
        </div>
      </form>
      <div>
        <p>name :{name}</p>
        <p>email: {email}</p>
        <p>password: {password}</p>
      </div>
    </div>
  );
};

export default Form;
