import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
export const Login = () => {
    const [nombre, setNombre] = useState('')
    const navigate = useNavigate();
    const { nameUser } = useContext(UserContext);
    const loginUsuario = (e) => {
        e.preventDefault();
        if (!nombre) return;
        nameUser(nombre);
        navigate('/home');

    }

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center bg-dark">
        <h1 className="text-center p-2">Login</h1>
        <div className="card p-4 shadow-sm w-50">
          <form onSubmit={loginUsuario}>
            <div className="mb-3">
              <label className="form-label display-6">Ingresa tu nombre</label>
              <input
                type="text"
                placeholder="Escribe tu nombre"
                className="form-control p-3"
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary p-3 w-50">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    )
}
