 import React from 'react';
 import { Navigate, Routes } from 'react-router-dom';
 import {Route } from 'react-router-dom';
 import Error404 from "./pages/Error404";
 import {Junior} from "./pages/Junior";
 import {JuniorPlus} from "./pages/Junior_Plus";
 import {PreJunior} from "./pages/PreJunior";
import s from './Routes.module.css'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR:'/junior',
    JUNIOR_PLUS: '/junior_plus'
}
function RoutesToJuniors() {
    return (
        <div className={s.common}>

            <Routes>


                <Route  path={'/'}  element={ <Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={ <PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={ <Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={ <JuniorPlus/>}/>



                <Route element={ <Error404/>}/>
            </Routes>



        </div>
    )
}

export default RoutesToJuniors
