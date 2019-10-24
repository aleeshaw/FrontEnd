import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';

function Login({values, errors, touched}) {
  
  return (
    <div className='form-container'>

      <ButtonGroup 
        className = 'radial-btn' 
        size = 'lg'
      >
        <Button tag={Link} to='/' className='selected'>
          Login
        </Button>
        <Button tag={Link} to='/register' className='unselected'>
          Sign Up
        </Button>
      </ButtonGroup>

      <h3 className='form-head'>Welcome Back!</h3>

      <Form className = 'form'>

        <div>
          {touched.username && errors.username && <p className='errs'>{errors.username}</p>}
          <Field 
            className = 'text-field'
            type = 'text'
            name = 'username'
            placeholder = 'username'
          />
        </div>

        <div>
          {touched.password && errors.password && <p className='errs'>{errors.password}</p>}
          <Field 
            className = 'text-field'
            type = 'password'
            name = 'password'
            placeholder = 'Password' 
          />
        </div>

      <div>  
        <Button 
          className= 'sub-btn' 
          type='submit' 
          value='signIn'
        >
          <span>Sign In!</span>
        </Button>
      </div>

      </Form>
    </div> //form container
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues ({username, password}) {
    return {
      username: username ||"",
      password: password || ""
    };
  },
  //VALIDATION
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("Name is required"),
    password: Yup.string()
      .required("Please enter your password.")
  }),
  //END VALIDATION

  handleSubmit(values, { setSubmitting, setStatus, props }) {

    axios 
      .post(`https://lbs-african-marketplace.herokuapp.com/auth/login`, values) 
      .then(results => {
         setStatus(results.data); 
        if (results.data.token) {
          props.history.push("/dashboard");
        }
        console.log(results);
      })
      .catch(error => {
        console.log("There's been an error: ", error);
        setSubmitting(false);
      });
  }
})(Login);

export default FormikUserForm;