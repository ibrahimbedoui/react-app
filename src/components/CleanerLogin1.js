import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import {FcGoogle} from 'react-icons/fc';
import {ImFacebook2} from 'react-icons/im';
//import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
//import Spinner from '../componentsforpfe/Spinner'
import Register from './Register.css';

function CleanerLogin1() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  //const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

   // if (isSuccess || user) {
     // navigate('/')
    //}

    dispatch(reset())
  }, [user, isError, isSuccess, message, {/*navigate*/}, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  //if (isLoading) {
    //return <Spinner />
 // }

  return (
    <>
      
      <form onSubmit={onSubmit}>
      <h1>
        <FaSignInAlt /> Se connecter
      </h1>
        <div className='ui divider'></div>
        <div className='ui form'>
          <div className='field'> 
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={email}
            placeholder='Email'
            onChange={onChange}
          />
          </div>
        </div>
        <div className='field'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={password}
            placeholder='Mot de passe'
            onChange={onChange}
          />
        </div>
        <span style={{ textDecoration: "underline", fontSize: "13px" }}>
              MOT DE PASSE OUBLIÉ ?
            </span>

        <div className='form-group'>
          <button className="fluid ui button blue">SE CONNECTER</button>
        </div>
        <span>
        ou connectez vous avec:
      </span>
      <FcGoogle/>
      <ImFacebook2/>
      </form>
  

    

  </>
)
}


export default CleanerLogin1;