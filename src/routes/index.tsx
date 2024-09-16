import {
  createBrowserRouter,
} from "react-router-dom";
import "../components/register/style.scss";
import RegisterForm from "../components/register";
import LoginForm from "../components/login";
import HomePage from "../components/home";
import UploadVideo from "../components/upload-video";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterForm />,
  },

  {
    path: "/login",
    element: <LoginForm />,
  },

  {
    path: "/teacher-area",
    element: <HomePage />
  },

  {
    path: "/teacher-area/home",
    element: <HomePage />
  },

  {
    path: "/teacher-area/upload-video",
    element: <UploadVideo />
  }
]);