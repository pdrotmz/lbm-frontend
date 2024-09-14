import { useState } from "react"
import LoginProps from "../../types/login"
import axios, { AxiosError } from "axios"
import logo from '../../assets/images/lbm-logo.jpg'

const LoginForm = () => {

    const[formData, setFormData] = useState<LoginProps> ({
        email: '',
        password: ''
    })

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
            const response = await axios.post('https://lbm.onrender.com/auth-teacher/login', formData, {withCredentials: true})
    
            setSuccessMessage('Sucesso ao logar')
            console.log(response.data)
        } catch (error){
            if(error instanceof AxiosError) {
                setErrorMessage('Erro ao logar !')
                console.log(error.response ? error.response.data: error.message)
            } else {
                console.error('Erro inesperado', error)
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


export default LoginForm