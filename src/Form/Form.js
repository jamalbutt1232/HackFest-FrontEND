import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import Home from '../Home';
import { Link } from 'react-router-dom';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        {/* <span className='close-btn'>×</span> */}
        <div className='form-content-left'>
          <img className='form-img' src='https://assets.website-files.com/5f3cf8cce20a65a6fa93628f/5f71c0460837622a8b95f29e_5f5702e956ffac494d37a5a7_people-working-collaborating-card-image-export-v0.1.png' alt='login' />
        </div>

            <FormSignup submitForm={submitForm} />
          </div>
    </>
  );
};

export default Form;