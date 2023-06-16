import { RegisterPage } from "../pages/register/RegisterPage";
import { HomePage } from "../pages/home/homePage";
import { LoginPage } from "../pages/login/loginPage";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../src/services/api";

export const RoutesMain = () => {
  const [usersList, setUsersList] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get("/users");
        setUsersList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LoginPage setUser={setUser} />} />
      <Route
        path="/register"
        element={<RegisterPage setUsersList={setUsersList} />}
      />
      <Route path="/home" element={<HomePage user={user} />} />
    </Routes>
  );
};
