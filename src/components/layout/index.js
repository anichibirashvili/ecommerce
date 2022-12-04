import { Divider } from "@mui/material";
import Header from "./header/Header"
import Navbar from "./navbar/Navbar"


const Layout = ({children}) => {
    return (
    <>
    <Header/>
    <Divider/>
    <Navbar/>
    {children}   
    </>   
    );
}

export default Layout;