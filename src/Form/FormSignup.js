import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
  setUserData,
  selectUserData
} from "./../slices/userAuthSlice";

const FormSignup = ({ submitForm }) => {
  const dispatch = useDispatch();
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const [userId,setUserId]=useState('')
  const setUser = () =>{
    
    axios.post('http://localhost:8080/api/user/', {
      name: values.username,
    })
    .then(function (response) {
      console.log("response.data) : " + response.data)
      dispatch(setUserData(response.data))
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1 style={{fontSize:26, fontWeight:'bolder'}}>
          Chit Chat
        </h1>
        <div className='form-inputs'>
          <label className='form-label' style={{fontSize:18}}>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
            style={{color:"black"}}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label' style={{fontSize:18}}>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
            style={{color:"black"}}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label' style={{fontSize:18}}>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            style={{color:"black"}}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <Link to={{pathname: "/home", state:{userId} }} >
            <button className='form-input-btn' type='submit' onClick={setUser}             style={{color:"white" , fontSize:16}}>
              
            <b> Sign In </b>
            </button>
        </Link>
        <span className='form-input-login' style={{color:"white" , fontSize:16}}>
          Want to register an organizaton? Register <a href='#' onClick={()=>alert("Register your organization")}>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;