import React from 'react';
import { useForm } from 'react-hook-form';
import './SignUpForm.css';
import axios from 'axios';
import{useNavigate} from "react-router"

const SignUpForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  let navigate=useNavigate();
  const onSubmit = (data) => {
    console.log("Signup Data: ", data);
    axios.post('http://localhost:3000/users',data)
    .then(response => {
     console.log(response.data);
     alert("Signup Successful")
     navigate('/login')
    })
  };

  // Watch the password field to validate confirm password
  const password = watch('password');

  return (
    <>
      <div id="signup-container">
        <h1>SIGNUP FORM</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username */}
          <div>
            Username:
            <input
              {
                ...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters"
                  }
                })
              }
              type="text"
              name="username"
              id="username"
            />
            {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
            <br />
          </div>

          {/* Name */}
          <div>
            Name:
            <input
              {
                ...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters"
                  }
                })
              }
              type="text"
              name="name"
              id="name"
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
            <br />
          </div>

          {/* Email */}
          <div>
            Email:
            <input
              {
                ...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email format"
                  }
                })
              }
              type="email"
              name="email"
              id="email"
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            <br />
          </div>

          {/* Password */}
          <div>
            Password:
            <input
              {
                ...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters"
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message: "Password must include at least one letter and one number"
                  }
                })
              }
              type="password"
              name="password"
              id="password"
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
            <br />
          </div>

          {/* Confirm Password */}
          <div>
            Confirm Password:
            <input
              {
                ...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: value =>
                    value === password || "Passwords do not match"
                })
              }
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
            {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>}
            <br />
          </div>

          <button id="signup-btn" type="submit">Signup</button>
        </form>
        <p>
          Already have an account?{" "}
          <span
            className="login-link"
            onClick={() => navigate('/login')}
          >
            Login here
          </span>
        </p>
      </div>
    </>
  );
};

export default SignUpForm;