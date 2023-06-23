import { RegisterPage } from "../pages/register/RegisterPage";
import { HomePage } from "../pages/home/homePage";
import { LoginPage } from "../pages/login/loginPage";
import { Route, Routes } from "react-router-dom";
import { ProtectRoutes } from "../src/components/ProtectedRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectRoutes/>}>
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
