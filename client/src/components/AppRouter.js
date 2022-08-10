import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Admin from "../pages/Admin"
import Auth from "../pages/Auth"
import Basket from "../pages/Basket"
import Device from "../pages/Device"
import Shop from "../pages/Shop"

const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route path = '/admin' element = {<Admin />} exact="true"/>
                <Route path = '/login' element={<Auth />} exact="true" />
                <Route path = '/registration' element={<Auth />} exact="true" />                
                <Route path = '/basket' element={<Basket />} exact="true" />
                <Route path='/device' element={<Device />} exact="true" />
                <Route path = '/' element={<Shop />} exact="true" />
            </Routes>            
        </Router>
     )
}

export default AppRouter;