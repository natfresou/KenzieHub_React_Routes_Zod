import { StyledHeading1, StyledHeading2 } from "../../styles/typography";
import { StyledSection } from "./style";
import { StylesButton } from "../../styles/button";
import { useForm } from "react-hook-form";
import { Input, Select } from "../../../src/components/input/index";
import { formRegraZod } from "../../../src/components/formZod/formZod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../../src/providers/UserContext";
import { useContext, useState } from "react";
import Logo from "../../../src/assets/img/Logo.svg";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { setUsersList, creatNewUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formRegraZod),
  });

  const submit = async (formData) => {
    const { currentPassword, ...data } = formData;
    await creatNewUser(data, setLoading);
    reset();
  };

  return (
    <>
      <StyledSection>
        <div className="containner">
          <header>
            <img src={Logo} alt="" />
            <StylesButton
              onClick={() => navigate("/")}
              buttonBackgraund="return"
            >
              Voltar
            </StylesButton>
          </header>
          <div className="div_form">
            <StyledHeading1>Crie sua conta </StyledHeading1>
            <StyledHeading2>Rapido e grátis, vamos nessa</StyledHeading2>
            <form onSubmit={handleSubmit(submit)}>
              <StyledHeading2>Nome</StyledHeading2>
              <Input
                type="text"
                register={register("name")}
                placeholder="Digite aqui seu nome"
              />
              {errors.name ? <h5>{errors.name.message}</h5> : null}
              <StyledHeading2>Email</StyledHeading2>
              <Input
                type="email"
                register={register("email")}
                placeholder="Digite aqui seu email"
              />
              {errors.email ? <h5>{errors.email.message}</h5> : null}
              <StyledHeading2>Senha</StyledHeading2>
              <Input
                type="password"
                register={register("password")}
                placeholder="Digite aqui sua senha"
              />
              {errors.password ? <h5>{errors.password.message}</h5> : null}
              <StyledHeading2>Confirmar Senha</StyledHeading2>
              <Input
                type="password"
                register={register("currentPassword")}
                placeholder="Digite novamente sua senha"
              />
              {errors.currentPassword ? (
                <h5>{errors.currentPassword.message}</h5>
              ) : null}
              <StyledHeading2>Bio</StyledHeading2>
              <Input
                type="text"
                register={register("bio")}
                placeholder="Fale sobre você"
              />
              {errors.bio ? <h5>{errors.bio.message}</h5> : null}
              <StyledHeading2>Contato</StyledHeading2>
              <Input
                type="text"
                register={register("contact")}
                placeholder="Opção de contato"
              />
              {errors.contact ? <h5>{errors.contact.message}</h5> : null}
              <StyledHeading2>Selecionar módulo</StyledHeading2>
              <Select register={register("course_module")} required>
                <option>Escolher opção</option>
                <option value="Primeiro módulo (Introdução ao Frontend)">
                  Primeiro módulo
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                  Segundo módulo
                </option>
                <option value="Terceiro módulo (Introdução ao Backend )">
                  Terceiro módulo
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                  Quarto módulo
                </option>
              </Select>
              {errors.course_module ? (
                <h5>{errors.course_module.message}</h5>
              ) : null}
              <StylesButton
                type="submit"
                buttonBackgraund="cadastro"
                disable={loading}
              >
                {loading ? "Cadastrando..." : "Cadastrar"}
              </StylesButton>
            </form>
          </div>
        </div>
      </StyledSection>
    </>
  );
};
