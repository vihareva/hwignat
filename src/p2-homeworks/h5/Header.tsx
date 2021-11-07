import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Header.module.css'

function Header() {
    return (
        <div>
            <ul className={s.navbar}>
                <li>
                    <NavLink to={PATH.PRE_JUNIOR}>
                    <span className={s.text}>PRE_JUNIOR</span>
                </NavLink>
                </li>
                <li>
                    <NavLink to={PATH.JUNIOR}>
                        <span className={s.text}>JUNIOR</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATH.JUNIOR_PLUS}>
                        <span className={s.text}>JUNIOR_PLUS</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header
