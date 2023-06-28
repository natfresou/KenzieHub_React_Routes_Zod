import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../src/services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [usersList, setUsersList] = useState([]);
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const currentPath = window.location.pathname;

  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));
    const loadUser = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      loadUser();
    }
  }, []);

  const creatNewUser = async (data, setLoading) => {
    try {
      setLoading(true);
      const response = await api.post("/users", data);
      toast.success("Cadastro realizado com sucesso");
      setUsersList((userList) => [...userList, response.data]);
      navigate("/");
    } catch (error) {
      toast.error("Erro no Cadastro, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (dat, setLoading) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", dat);
      setUser(data.user);
      toast.success("Login realizado com sucesso");
      localStorage.setItem("@TOKEN", JSON.stringify(data.token));
      localStorage.setItem("@USERID", JSON.stringify(data.user.id));
      navigate("/home");
    } catch (error) {
      toast.error("Erro no Login, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const logaut = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        setUsersList,
        logaut,
        loginUser,
        creatNewUser,
        isOpen,
        setIsOpen,
        isOpenModal,
        setIsOpenModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
