import React from 'react'
import { UserContext } from './UserContext'
import { useState } from 'react'

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const nameUser = (name) => {
        setUser(name)
        console.log(name)
    }
    return (
        <UserContext.Provider value={{ nameUser, user }}>
            {children}
        </UserContext.Provider>
    )
}
