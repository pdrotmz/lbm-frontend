import './style.scss'

const RegisterForm = () => {
  return (
    <div className="main">
          <p>Bem-vindo</p>
          <form action="" method="post" className='form'>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="E-mail" />
              <input type="password" placeholder="Password" />
          </form>
    </div>
  )
}

export default RegisterForm