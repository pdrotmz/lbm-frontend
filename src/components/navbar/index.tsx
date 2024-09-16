import { useNavigate } from 'react-router-dom'
import './style.scss'


const Navbar = () => {

  const navigate = useNavigate();

  const redirectToUploadVideo = () => {
    navigate('/teacher-area/upload-video');
  }

  return (
    <>
        <nav>
            <header>
                <ul>
                    <li><a onClick={redirectToUploadVideo}>Postar Video </a></li>
                    <li><a href="">Meus Videos</a></li>
                    <li><a href="">Editar Video</a></li>
                    <li><a href="">Excluir Video</a></li>
                </ul>
            </header>
        </nav>
    </>
  )
}

export default Navbar