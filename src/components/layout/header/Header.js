import {  Typography, Button } from '@mui/material';
import React, { useContext } from 'react';
import { userContext } from '../../../context/userContext';
import {Link} from "react-router-dom"
import Search from './Search';
import { isUserAdmin } from '../../../app/util';


const Header = () => {
    const {userData, logout} = useContext(userContext);
  return (
    <>
        <Link to="/cart">Cart</Link>
        <br />
        <Link to="/">Home</Link>
        <br />
        <Link to="/register">Register</Link>
        <br />
        <Link to="/products/categories/:categoryName">Products</Link>
        <br />

        <Search/>
        {isUserAdmin() && <Link to="/products/new">add new product</Link>}
        { userData ? (
        <>
        <Typography>Hello, {userData?.firstName}</Typography>
        <Button onClick={logout}>Logout</Button>
        <Link 
            to={`/profile/${userData?.firstName}`} 
            state ={{ id: userData?._id }}
        >
            Profile 
        </Link>
        </> 
        ) : ( 
        <>
        <Link to="/login">Login</Link>
        </>
        ) }
        
    </> 
  );
        }

export default Header;