import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void 
    addUser: () =>void
    error: string | null 
    totalUsers: number
    onEnter:(e:KeyboardEvent<HTMLInputElement>)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser,   error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? (s.input+ ' ' +s.errorInput ) : s.input // need to fix with (?:)

    return (
        <div className={s.allItems}>
            <div>
                <input value={name} onChange={setNameCallback} className={inputClass} onKeyDown={onEnter} onBlur={setNameCallback}/>
                <div className={s.error}>{error}</div>
            </div>

            <button disabled={!name} className={s.button} onClick={addUser}>add</button>
            <div className={s.number}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
