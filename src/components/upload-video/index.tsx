import Footer from "../footer"
import Navbar from "../navbar"
import logo from '../../assets/images/lbm-logo.jpg'
import React, { useState } from "react"
import VideoProps from "../../types/video"
import axios, { AxiosError } from "axios"

const UploadVideo = () => {

    const[formData, setFormData] = useState<VideoProps> ({
        title: '',
        description: '',
        video: null
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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({
                ...formData,
                video: e.target.files[0]
            })
        }
    }

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage(null);
        setSuccessMessage(null);

    


        try {
            const response = await axios.post('https://lbm.onrender.com/private/video-area/upload-video', formData, {withCredentials: true}); 
       
            setSuccessMessage('Video postado com sucesso, professor !')
            console.log(response.data)
        } catch(error) {
            if (error instanceof AxiosError) {
                setErrorMessage('Erro ao tentar postar video');
                console.error(error.response ? error.response.data : error.message)
            } else {
                console.error('Erro inesperado', error)
            }
        }
    }

    



  return (
    <>
        <div className="main">
        <Navbar />
        <figcaption>
          <div className="image-home">
            <img src={logo} alt="Learning By Me Logo" />
          </div>
        </figcaption>

        <form onSubmit={handleSubmit} method="post" className="form">
           <input 
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required/>
           <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required/>
           <input 
            type="file"
            name="video"
            accept="video/*"
            onChange={handleFileChange}
            required/>

           <button type="submit">Upload Video</button>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </form>
        <Footer />
        </div>
    </>
  )
}


export default UploadVideo