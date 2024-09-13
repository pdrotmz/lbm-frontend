import {
  createBrowserRouter,
} from "react-router-dom";
import "../components/register/style.scss";
import RegisterForm from "../components/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterForm />,
  },
]);