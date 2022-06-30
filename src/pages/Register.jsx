import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
//import Spinner from '../componentsforpfe/Spinner'

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

function Register() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username:'',
    type: '1',
    email: '',
    password: '',
    re_password: '',
  })

  const { first_name, last_name, username, type, email, password, re_password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()
  //object that stores the form errors
  const [formErrors, setFormErrors] = useState({});

//function to validate the form data
  const validate = (values) => {
    const errors = {};
    if (!formData.first_name) {
      errors.first_name = "Le nom est obligatoire";
    }  
    if (!formData.last_name) {
        errors.last_name = "Le prénom est obligatoire";
      }
    if (!formData.email) {
      errors.email = "L'email est obligatoire !";
    } else if (!EMAIL_REGEX.test(values.email)) {
      errors.email = "Tapez un email valide !";
    }
    if (!formData.password) {
      errors.password = "Le mot de passe est obligatoire!";
    } else if (!PWD_REGEX.test(formData.password)) {
      errors.password = "Votre mot de passe doit contenir au moins 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial et une longueur d'au moins 10";
    }else if (formData.re_password && formData.re_password !== values.password ){
      errors.re_password ="Ce champs doit être identique à votre mot de passe!"
    }
    return errors;
  };
 

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/Login')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formData));
  
    }
        {/*else  {
      const userData = {
        first_name,
        last_name,
        username: email,
        type: '1',
        email,
        password,
        re_password,
      }

      dispatch(register(userData))
    }*/
  }
  

 {/* if (isLoading) {
    return <Spinner />
 */}

  return (
    <>
      <section className='heading'>
        <h1>
        S'inscrire avec votre e-mail: 
        </h1>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
          <label>Nom: * </label>
            <input
              type='text'
              className='form-control'
              id='first_name'
              name='first_name'
              value={first_name}
              placeholder=''
              onChange={onChange}
            />
          </div>
          <label>Prénom: * </label>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='last_name'
              name='last_name'
              value={last_name}
              placeholder=''
              onChange={onChange}
            />
          </div>
          <label>Email: * </label>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder=''
              onChange={onChange}
            />
          </div>
          <label>Mot de passe: * </label>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder=''
              onChange={onChange}
            />
          </div>
          <label>Confirmation de mot de passe: * </label>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='re_password'
              name='re_password'
              value={re_password}
              placeholder=''
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register