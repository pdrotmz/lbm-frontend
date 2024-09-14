import './style.scss'
import logo from '../../assets/images/lbm-logo.jpg'
import React, { useState } from 'react';
import registerProps from '../../types/register';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

  const navigate = useNavigate();

  const[formData, setFormData] = useState<registerProps>({
    username: '',
    email: '',
    password: ''
  });

  console.log(formData)

  const[errorMessage, setErrorMessage] = useState<string | null>(null)
  const[successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await axios.post('https://lbm.onrender.com/auth-teacher/register', formData, { withCredentials: true });
  
      navigate('/teacher-area')

      setSuccessMessage('Usuário registrado com sucesso !');
      console.log(response.data)
    } catch (error) {
      if (error instanceof AxiosError) {
        setErrorMessage('Erro ao registrar usuário, tente novamente');
        console.error(error.response ? error.response.data : error.message);
      } else {
        console.error('Erro inesperado', error);
      }
    }
    }

  return (
    <div className="main">
      <div className="image">
        <img src={logo} alt="" />
      </div>
        <form onSubmit={handleSubmit} method="post" className='form'>
          <p>Welcome to LBM!</p>
          <div>
              <input 
                type="text"
                name='username'
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required/>
              <input
                type="email"
                name='email'
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required/>
              <input 
                type="password"
                name='password'
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required/>
          </div>
          <button type='submit'>Register</button>

          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </form>
    </div>
  )
}

export default RegisterForm