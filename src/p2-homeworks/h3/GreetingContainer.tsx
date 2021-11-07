import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) =>void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const trimmedName=e.currentTarget.value.trim()
        if(trimmedName){ //if(trimmedName!=='')
            setName(trimmedName)
            error && setError('')
        }
        else{
            name && setName('')
            setError('name is required')
        }
    }

    const addUser = () => {
            addUserCallback(name)
            alert(`Hello, ${name} !`)
            setName('')
    }

    const onEnter=(e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.key==='Enter' && name){
            addUser()
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}

        />
    )
}

export default GreetingContainer
