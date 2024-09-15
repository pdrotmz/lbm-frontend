import './style.scss'
import Navbar from "../navbar"
import logo from '../../assets/images/lbm-logo.jpg'
import Footer from "../footer"


const HomePage = () => {
  return (
    <>
        <Navbar />
        <figcaption>
          <div className="image-home">
            <img src={logo} alt="Learning By Me Logo" />
          </div>
        </figcaption>
        <Footer />
    </>
  )
}

export default HomePage