import { LoginPage } from "../src/pages/login/loginPage";
import { RegisterPage } from "../src/pages/register/RegisterPage";
import { HomePage } from "../src/pages/home/homePage";

import { Route, Routes } from "react-router-dom";
import { ProtectRoutes } from "../src/components/ProtectedRoutes";
import { PublicRoutes } from "../src/components/PublicRouts";
import { TechProvider } from "../src/providers/TechContext";

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
