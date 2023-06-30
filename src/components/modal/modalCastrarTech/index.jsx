import { useEffect, useRef } from "react";
import { StyledDiv } from "./style";
import { StyledHeading1 } from "../../../styles/typography";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { useForm } from "react-hook-form";
import { Input, Select } from "../../input";
import { TechContext } from "../../../providers/TechContext";
import { formRegraZodNewTech } from "../../formZod/formZod";
import { zodResolver } from "@hookform/resolvers/zod";

export const Modal = () => {
  const { setIsOpen } = useContext(UserContext);
  const { newTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formRegraZodNewTech),
  });

  const modalRef = useRef(null);
  const buttonModalRef = useRef(null);

  const submit = async (formData) => {
    await newTech(formData);
    reset();
  };

  useEffect(() => {
    const modalOutClick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpen(false);
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
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", buttonEsclRef);

    return () => {
      window.removeEventListener("keydown", buttonEsclRef);
    };
  }, []);

  return (
    <StyledDiv>
      <div ref={modalRef} role="dialog" className="modalContainner">
        <div className="closeModal">
          <StyledHeading1>Cadastrar Tecnologias</StyledHeading1>
          <StyledHeading1 className="closeX" onClick={() => setIsOpen(false)}>
            x
          </StyledHeading1>
        </div>
        <div className="form_containner">
          <form onSubmit={handleSubmit(submit)}>
            <p>Nome</p>
            <Input type="text" register={register("title")} />
            {errors.title ? <h5>{errors.title.message}</h5> : null}
            <p>Selecionar status</p>
            <Select register={register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </Select>
            {errors.status ? <h5>{errors.status.message}</h5> : null}
            <button ref={buttonModalRef} type="submit">
              Cadastrar Tecnologias
            </button>
          </form>
        </div>
      </div>
    </StyledDiv>
  );
};
