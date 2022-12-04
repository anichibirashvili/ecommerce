import "./App.css";
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductFormPage from './pages/ProductFormPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from "./context/userContext";
import ProtectedRoute from './app/ProtectedRoute';
import Layout from './components/layout';
import { isUserAdmin } from "./app/util";
import { ProductContextProvider } from './context/productContext';
import CategoryProducts from './components/products/CategoryProducts';
import SingleProductPage from './pages/SingleProductPage';
import { CartContextProvider } from './context/cartContext';
import CartPage from './pages/CartPage';



function App () {
  
  const isAdmin =isUserAdmin();
  return ( 
    <Router>
        <UserContextProvider>
            <ProductContextProvider>
              <CartContextProvider>
                <Layout>
                  <Routes>
                    <Route path="/" element={<HomePage/>}/>;
                    <Route path="/login" element={<LoginPage/>}/>;
                    <Route path="/products/new" element={
                      <ProtectedRoute hasAccess= {isAdmin}>
                        <ProductFormPage/>
                      </ProtectedRoute>
                    }/>;
                    <Route path="/products/:id/edit" element={
                                <ProtectedRoute hasAccess= {isAdmin}>
                                <ProductFormPage/>
                              </ProtectedRoute>
                    }/>;
                    <Route path="/register" element={<RegisterPage/>}/>;
                    <Route path="/profile/:name/" element={<ProfilePage/>}/>;
                    <Route path="/cart" element={<CartPage/>}/>;
                    <Route path="/products/categories/:categoryName" element={<CategoryProducts/>}/>;
                    <Route path="/products/categories/:categoryName/:productName" element={ <SingleProductPage />}/>;
                  
                </Routes>
              </Layout>
            </CartContextProvider>
          </ProductContextProvider>
        </UserContextProvider>
    </Router>
  )
}

export default App;


