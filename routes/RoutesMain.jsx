import { RegisterPage } from "../pages/register/RegisterPage";
import { HomePage } from "../pages/home/homePage";
import { LoginPage } from "../pages/login/loginPage";
import { Route, Routes } from "react-router-dom";


export const RoutesMain = () => {


  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route
        path="/register"
        element={<RegisterPage/>}
      />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};
