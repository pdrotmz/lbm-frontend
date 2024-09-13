import './style.scss'
import logo from './images/lbm-logo.jpg';

const RegisterForm = () => {
  return (
    <div className="main">
      <div className="image">
        <img src={logo} alt="" />
      </div>
        <form action="" method="post" className='form'>
          <p>Welcome to LBM!</p>
          <div>
              <input type="text" placeholder="Username" required/>
              <input type="email" placeholder="E-mail" required/>
              <input type="password" placeholder="Password" required/>
          </div>
          <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default RegisterForm