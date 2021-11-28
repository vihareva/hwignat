import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {loadingAC} from "./bll/loadingReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import loadingGif from './cc3a7859dffe46981deefe60c1ec4acf.gif'
import s from './HW10.module.css'
function HW10() {
    const loading= useSelector<AppStoreType,boolean>(st=>st.loading)
    const dispatch=useDispatch()


    const setLoading = () => {
      dispatch(loadingAC(true))
        setTimeout(()=>{
        dispatch(loadingAC(false))
        }, 2000)

    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img className={s.gif} src={loadingGif}  /></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
