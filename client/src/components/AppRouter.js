import React from "react";
import {Router, Route, Routes, Navigate } from 'react-router-dom';
import Admin from "../pages/Admin"
import Auth from "../pages/Auth"
import Basket from "../pages/Basket"
import Device from "../pages/Device"
import Shop from "../pages/Shop"
import { authRoutes, publicRoutes } from "../routes";



const AppRouter = () => {
    const isAuth = false

    return (
        <Routes>
            <Route>                
                {isAuth && authRoutes.map(({ path, Element }) => 
                    <Route key={path} path={path} element={Element()} />               
                )}
                {publicRoutes.map(({ path, Element }) =>
                    <Route key={path} path={path} element={Element()} />
                )}
                {/* <Route path = '/admin' element = {<Admin />} exact="true"/>
                <Route path = '/login' element={<Auth />} exact="true" />
                <Route path = '/registration' element={<Auth />} exact="true" />                
                <Route path = '/basket' element={<Basket />} exact="true" />
                <Route path='/device' element={<Device />} exact="true" />
                <Route path = '/' element={<Shop />} exact="true" /> */}
            </Route>
        </Routes>

     )
}

export default AppRouter;