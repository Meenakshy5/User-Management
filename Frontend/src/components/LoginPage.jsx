import React from 'react';
import './Loginpage.css'
import axios from 'axios';
import { useForm } from 'react-hook-form';


const LoginPage = () => {
  const {register,handleSubmit,formState:{errors}}=useForm(); 

  const onSubmit=(data)=>{
      console.log("Form Data:",data)
      axios.post('http://localhost:3000/users/login',data)
      .then(response=>{
        console.log(response.data)
        alert("Login Successful")
      })
      .catch(error=>console.log(error))
      
  }

  return (
    <div className="form-container">
    <h1 className="form-title">Login Form</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          {...register('email',
            { required: 'Email is required' })}
          type="email"name="email"id="email"className="form-input"/>
          {errors.email && <p className="error-message">{ errors.email.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          {...register('password',{
            required: 'Password is required',
            minLength:{
                value:4,
                message:"Password should be atleast 4 character"
            }
          })}type="password" name="password" id="password"className="form-input" />
          {errors.password && <p className="error-message">{ errors.password.message}</p>}
      </div>
      <button type="submit" className="submit-button">Log In</button>
    </form>
  </div>
  )
}

export default LoginPage;
