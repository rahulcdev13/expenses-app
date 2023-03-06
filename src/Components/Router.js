import React from 'react'
import Header from './Header';
import Footer from './Footer'; 
import Expenses from '../ExpenseTracker/Expenses'; 

import { BrowserRouter, Routes, Route } from "react-router-dom"; 

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path="/" element={<Expenses />} > </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  ) 
} 
export default Router;
