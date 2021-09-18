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
      
      dispatch(setUserData(response.data))
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Chit Chat
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <Link to={{pathname: "/home", state:{userId} }} >
            <button className='form-input-btn' type='submit' onClick={setUser}>
            <b> Sign In </b>
            </button>
        </Link>
        <span className='form-input-login'>
          Want to register an organizaton? Register <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;