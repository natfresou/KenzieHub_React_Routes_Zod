import { useEffect, useRef, useState } from "react";
import { StyledDiv } from "./style";
import { StyledHeading1 } from "../../../styles/typography";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { useForm } from "react-hook-form";
import { Input, Select } from "../../input";
import { TechContext } from "../../../providers/TechContext";
import { zodResolver } from "@hookform/resolvers/zod";

export const ModalTechChange = () => {
  const { setIsOpenModal } = useContext(UserContext);

  const { isDelChange, deleteUserTech, upDateUserTech } =
    useContext(TechContext);

  const [valor, setValor] = useState("");

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { status: isDelChange.status },
  });

  const modalChangeRef = useRef(null);

  const submit = async (formData) => {
    await upDateUserTech(isDelChange.id, formData);
  };

  useEffect(() => {
    const modalOutClick = (event) => {
      if (!modalChangeRef.current?.contains(event.target)) {
        setIsOpenModal(false);
      }
    };
    window.addEventListener("mousedown", modalOutClick);

    return () => {
      window.removeEventListener("mousedown", modalOutClick);
    };
  }, []);

  useEffect(() => {
    const buttonEsclRef = (event) => {
      if (event.key === "Escape") {
        setIsOpenModal(false);
      }
    };
    window.addEventListener("keydown", buttonEsclRef);

    return () => {
      window.removeEventListener("keydown", buttonEsclRef);
    };
  }, []);

  return (
    <StyledDiv>
      <div ref={modalChangeRef} role="dialog" className="modalContainner">
        <div className="closeModal">
          <StyledHeading1>Tecnologia Detalhes</StyledHeading1>
          <StyledHeading1
            className="closeX"
            onClick={() => setIsOpenModal(false)}
          >
            x
          </StyledHeading1>
        </div>
        <div className="form_containner">
          <form onSubmit={handleSubmit(submit)}>
            <p>Nome</p>
            <Input
              type="text"
              register={register("title")}
              defaultValue={isDelChange.title}
              disabled
            />
            <p>Selecionar status</p>
            <Select register={register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </Select>
            <div className="button_containner">
              <button type="submit" className="buttonChange">
                Salvar Alterações
              </button>
              <button
                type="button"
                onClick={() => deleteUserTech(isDelChange.id)}
                className="buttonDelete"
              >
                Excluir
              </button>
            </div>
          </form>
        </div>
      </div>
    </StyledDiv>
  );
};
