
import React from 'react'
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm'

const Register = () => {
  return (
    <div>
        <RegisterForm/>
        <Link to="/login" >Already have an account?</Link>
    </div>
  )
}

export default Register;