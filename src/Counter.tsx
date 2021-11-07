import React, {useEffect, useState} from 'react'

export function Counter() {

    const [value, setValue] = useState(0)

    useEffect(()=>{
        let stringValue = localStorage.getItem('value')
        if (stringValue){
            let newValue = JSON.parse(stringValue)
            setValue(newValue)
        }
    }, []) //при перезагрузке страницы (единожды) берем значение из localStorage и его сетаем(отрисоввываем)


    useEffect(()=>{
        localStorage.setItem('value', JSON.stringify(value))
    }, [value]) //при каждом изменении value то есть при каждом инкрементировании засовывый его в localStorage

    const incHandler = () => {
        setValue(value + 1)
    }

    // const setToLocalStorageHandler = () => {
    //     localStorage.setItem('value', JSON.stringify(value))
    // }
    //
    // const getFromLocalStorageFromHandler = () => {
    //     let stringValue = localStorage.getItem('value')
    //     if (stringValue) {
    //         let newValue = JSON.parse(stringValue)
    //         setValue(newValue)
    //     }
    //
    // }



    // const removeItemFromLocalStorageFromHandler = () => {
    //     localStorage.removeItem('value')
    // }
    // const clearLocalStorageHandler = () => {
    //     localStorage.clear()
    // }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={incHandler}> inc value</button>
            {/*<button onClick={setToLocalStorageHandler}> set value</button>*/}
            {/*<button onClick={getFromLocalStorageFromHandler}> get value</button>*/}
            {/*<button onClick={removeItemFromLocalStorageFromHandler}> remove value</button>*/}
            {/*<button onClick={clearLocalStorageHandler}> inc value</button>*/}
        </div>
    )

}
