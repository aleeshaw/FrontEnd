import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';

function UserForm({values, errors, touched, status}) {
  
  return (
    <div className='form-container'>

     <ButtonGroup class='radial-btns'>
        <Button color='primary'><Link to='/' className='btn-txt'>Login</Link></Button>
        <Button ><Link to='/register' className='btn-txt'>Sign Up</Link></Button>
      </ButtonGroup>

      <h3 className='form-head'>Welcome to African Marketplace</h3>

    <Form className = 'register-form'>

      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field 
          className = 'text-field'
          type = 'text'
          name = 'username'
          placeholder = 'username'
        />
      </div>

      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field 
          className = 'text-field'
          type = 'password'
          name = 'password'
          placeholder = 'Password' 
        />
      </div>

      <div className='department'>
        {touched.department && errors.departmetn && <p>{errors.department}</p>}
        
        <Field
          component = 'select'
          name = 'department'
          className='department-select'
        >
          <option>Buyer or Seller?</option>
          <option value='buyer'>Buyer</option>
          <option value='seller'>Seller</option>
        </Field> 

      </div>
      
      <div>  
        <Button 
          color= 'link' 
          className= 'sub-btn' 
          type='submit' 
          value='Sign In!'
        >
          Let's Get Started!
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

  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    
      axios 
        .post("https://lbs-african-marketplace.herokuapp.com/api/auth/register", values) 
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
})(UserForm);

export default FormikUserForm;

//TODO User API to to set up individual user pages and user accounts.