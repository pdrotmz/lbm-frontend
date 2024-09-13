import './style.scss'

const RegisterForm = () => {
  return (
    <div className="main">
          <p>Welcome to LBM!</p>
          <form action="" method="post" className='form'>
              <input type="text" placeholder="Username" required/>
              <input type="email" placeholder="E-mail" required/>
              <input type="password" placeholder="Password" required/>
              <button type='submit'>Register</button>
          </form>
    </div>
  )
}

export default RegisterForm