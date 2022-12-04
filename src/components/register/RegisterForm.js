import React, {useContext, useEffect, useState} from 'react'
import { userContext } from '../../context/userContext';
import { Button, FormControl, TextField } from "@mui/material";
import useForm from "../../app/hooks/useForm";



const generateRegisterFormValues = () => {

    return {
        firstName: {
            value: "",
            required:true,
            error: "",
            validateInput: (name) => 
            name.length > 3 ? null : "name should have at least 3 character",
        },
        lastName: {
            value: "",
            required: true,
            error: "",
            validateInput: (lastName) => 
            lastName.length >3 
            ? null 
            : " last name should have at least 4 character",
        },
        email: {
            value: "",
            required: true,
            error: "",
            validateInput: (email) => 
            email.includes("@gmail.com") ? null : "email is not valid",
        },
        password: {
            value: "",
            required: true,
            error: "",
            validateInput: (password) => 
            password.length > 6
            ? null 
            :"password should have at least 7 characters",
        },
    };
};

const RegisterForm = () => {
    const {registerOrLogin} = useContext(userContext)
    const {formValues, onInputChange, checkButtonDisable}= useForm({
        defaultFormValues: generateRegisterFormValues(), 
    });


    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        setIsButtonDisabled(checkButtonDisable(formValues));
    },[formValues]);



    const registerUSer = (e) => {
        e.preventDefault();
        const firstName = formValues.firstName.value;
        const lastName = formValues.lastName.value;
        const email = formValues.email.value;
        const password = formValues.password.value;
        registerOrLogin({firstName, lastName, email, password}, false);
    };

  return ( 
  <FormControl fullWidth>
    <TextField 
    variant='outlined'
    name='firstName'
    label='firstName'
    value={formValues.firstName.value}
    onChange ={onInputChange}
    error ={!!formValues.firstName.error}
    helperText = {formValues.firstName.error}
    margin = {'dense'}
    />
        <TextField 
    variant='outlined'
    name='lastName'
    label='lastName'
    value={formValues.lastName.value}
    onChange ={onInputChange}
    error ={!!formValues.lastName.error}
    helperText = {formValues.lastName.error}
    margin = {'dense'}
    />
        <TextField variant='outlined'
    name='email'
    label='email'
    value={formValues.email.value}
    onChange ={onInputChange}
    error ={!!formValues.email.error}
    helperText = {formValues.email.error}
    margin = {'dense'}
    />
        <TextField 
    variant='outlined'
    name='password'
    label='password'
    value= {formValues.password.value}
    onChange ={onInputChange}
    error ={!!formValues.password.error}
    helperText = {formValues.password.error}
    margin = {'dense'}
    />

    <Button disabled={isButtonDisabled} onClick={registerUSer}>Register</Button>
  </FormControl>
    
  );
};

export default RegisterForm;