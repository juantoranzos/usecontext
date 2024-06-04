import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const Home = () => {
    const {user} = useContext(UserContext)
  return (
    <h1 className='text-center'>Hola {user}</h1>
  )
}
