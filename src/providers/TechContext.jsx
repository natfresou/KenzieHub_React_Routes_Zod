import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../src/services/api";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { setIsOpen, user, setUser, setIsOpenModal } = useContext(UserContext);
  const [userTechList, setUserTechList] = useState(user?.techs || []);
  const [isDelChange, setIsDelChange] = useState(null);

  const token = JSON.parse(localStorage.getItem("@TOKEN"));

  const newTech = async (informs) => {
    try {
      const { data } = await api.post("/users/techs ", informs, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserTechList((oldList) => [...oldList, data]);
      toast.success("Cadastro de tecnologia realizado com sucesso");
      setIsOpen(false);
    } catch (error) {
      toast.error("Erro no Cadastro da tecnologia, tente novamente.");
    }
  };

  const upDateUserTech = async (UserTechID, informs) => {
    try {
      const { data } = await api.put(`users/techs/${UserTechID}`, informs, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia atualizada com sucesso");
      const listTec = userTechList.filter(
        (userTech) => userTech.id !== UserTechID
      );
      setUserTechList([...listTec, data]);
    } catch (error) {
      console.log(error);
      toast.error("Erro na atualização da tecnologia, tente novamente.");
    } finally {
      setIsOpenModal(false);
    }
  };

  const deleteUserTech = async (UserTechID) => {
    try {
      await api.delete(`users/techs/${UserTechID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia removida com sucesso");
      setUserTechList(
        userTechList.filter((userTech) => userTech.id !== UserTechID)
      );
    } catch (error) {
      console.log(error);
      toast.error("Erro na remoção da tecnologia, tente novamente.");
    } finally {
      setIsOpenModal(false);
    }
  };

  return (
    <TechContext.Provider
      value={{
        userTechList,
        setUserTechList,
        newTech,
        deleteUserTech,
        isDelChange,
        setIsDelChange,
        upDateUserTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
