import React, { useContext } from "react";
import {Router, Route, Routes, Navigate } from 'react-router-dom';
import { Context } from "../index";
import { authRoutes, publicRoutes } from "../routes";


const AppRouter = () => {
    const { user } = useContext(Context);
    
    console.log(user)

    return (
        <Routes>
            <Route>                
                {user.isAuth && authRoutes.map(({ path, Element }) => 
                    <Route key={path} path={path} element={Element()} />               
                )}
                {publicRoutes.map(({ path, Element }) =>
                    <Route key={path} path={path} element={Element()} />
                )}
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Route>
        </Routes>

    )
}

export default AppRouter;