import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
export const Login = () => {
    const [nombre, setNombre] = useState('')
    const navigate = useNavigate()
    const loginUsuario = (e)=>{
       e.preventDefault();
       if (!nombre) return ;
       navigate ('/home');
       
    }

  return (
    <>
    <h1 className='text-center p-2'>Login</h1>
    <form onSubmit={loginUsuario} className='form-control w-50 '>
    <input  type="text"  className='form-control p-3 m-4 w-50' onChange={(e) => setNombre(e.target.value)}  />
    <button type='submit'>Enviar</button>
        
    </form>
    
    </>

  )
}
