import React from 'react'
import Header from './Header'
import RoutesToJuniors from './Routes'
import {HashRouter} from "react-router-dom";
import s from './HW5.module.css'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}

            {/*    <input type="checkbox" id="nav-toggle" hidden/>*/}
            {/*<ul>*/}
            {/*    <li><a href="#1">Один</a></li>*/}
            {/*    <li><a href="#2">Два</a></li>*/}
            {/*</ul>*/}
            <HashRouter>
            <input type="checkbox" id={'navToggle'} hidden/>
            <nav className={s.nav}>
                <label htmlFor="navToggle" className={s.navToggle}></label>
                <Header/>
            </nav>
                <div className={s.content}>
                    <RoutesToJuniors/>
                </div>

            </HashRouter>
        </div>
    )
}

export default HW5
