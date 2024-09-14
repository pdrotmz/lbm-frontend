import {
  createBrowserRouter,
} from "react-router-dom";
import "../components/register/style.scss";
import RegisterForm from "../components/register";
import LoginForm from "../components/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterForm />,
  },

  {
    path: "/login",
    element: <LoginForm />,
  }
]);