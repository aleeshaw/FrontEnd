import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';

function Registration({values, errors, touched, status}) {
  
  return (
    <div className='form-container'>

      <ButtonGroup 
        size = 'lg '
        className = 'radial-btn'
      >
        <Button color='primary' tag={Link} to='/' className='unselected'>
          Login
        </Button>
        <Button tag={Link} to='/register' className='selected'>
          Sign Up
        </Button>
      </ButtonGroup>

      <h3 className='form-head'>Welcome to African Marketplace</h3>

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

      <div className='department'>
        {touched.department && errors.departmetn && <p className='errs'>{errors.department}</p>}
        
        <Field
          component = 'select'
          name = 'department'
          className='dept-select'
        >
          <option>Buyer or Seller?</option>
          <option value='buyer'>Buyer</option>
          <option value='seller'>Seller</option>
        </Field> 

      </div>
      
      <div>  
        <Button 
          
          className= 'sub-btn' 
          type='submit' 
          value='register'
          
        >
          <span>Let's Get Started!</span>
        </Button>
      </div>

    </Form>
    </div>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues ({username, department, password}) {
    return {
      username: username ||"",
      password: password || "",
      department: department || ""
    };
  },
  //VALIDATION
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("Name is required"),
    password: Yup.string()
      .min(8, "Please choose a password with at least 8 characters.")
      .required("Password is required."),
  }),
  //END VALIDATION

  handleSubmit(values, { resetForm, setSubmitting, setStatus }) {
    
      axios 
        .post(`https://lbs-african-marketplace.herokuapp.com/auth/register`, values) 
        .then(results => {
          console.log(results); //logging results
          setStatus(results.data);
          resetForm(); //resetting form after submit
          setSubmitting(false); 
        })
        .catch(error => {
          console.log("There's been an error: ", error);
          setSubmitting(false);
        });
    
  }
})(Registration);

export default FormikUserForm;
