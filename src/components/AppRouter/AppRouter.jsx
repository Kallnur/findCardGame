import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { priRoute, pubRoute } from './routes/routes';

function AppRouter() {

    const user = false;

    return (
        <Routes>
            {
                !user
                ?
                pubRoute.map(obj => 
                    <Route key={obj.path} path={obj.path} element={obj.component} exect />  
                )
                :
                priRoute.map(obj => 
                    <Route key={obj.path} path={obj.path} element={obj.component} exect />    
                )
            }
        </Routes>
    )
}

export default AppRouter