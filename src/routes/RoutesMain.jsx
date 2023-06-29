import { LoginPage } from "../pages/login/loginPage";
import { RegisterPage } from "../pages/register/RegisterPage";
import { HomePage } from "../pages/home/homePage";

import { Route, Routes } from "react-router-dom";
import { ProtectRoutes } from "../components/protectedRoutes";
import { PublicRoutes } from "../components/publicRouts";
import { TechProvider } from "../providers/TechContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<ProtectRoutes />}>
        <Route
          path="/home"
          element={
            <TechProvider>
              <HomePage />
            </TechProvider>
          }
        />
      </Route>
    </Routes>
  );
};
