import { toast } from "react-toastify";
import Logo from "../../src/assets/img/Logo.svg";
import { StyledHeading1, StyledHeading2 } from "../../styles/typography";
import { StyledSection } from "./style";
import { StylesButton } from "../../styles/button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input, Select } from "../../src/components/input/index"
import { api } from "../../src/services/api";
import { formRegraZod } from "../../src/components/formZod/formZod"
import { zodResolver } from "@hookform/resolvers/zod";

export const RegisterPage = ({ setUsersList }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formRegraZod),
  });

  const creatNewUser = async (data) => {
    try {
      const response = await api.post("/users", data);
      toast.error("Cadastro realizado com sucesso");
      setUsersList((userList) => [...userList, response.data]);
      navigate("/");
    } catch (error) {
      toast.error("Erro no Cadastro, tente novamente.");
    }
  };

  const submit = async (formData) => {
    const { currentPassword, ...data } = formData;
    await creatNewUser(data);
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
              {errors.name ? <p>{errors.name.message}</p> : null}
              <StyledHeading2>Email</StyledHeading2>
              <Input
                type="email"
                register={register("email")}
                placeholder="Digite aqui seu email"
              />
              {errors.email ? <p>{errors.email.message}</p> : null}
              <StyledHeading2>Senha</StyledHeading2>
              <Input
                type="password"
                register={register("password")}
                placeholder="Digite aqui sua senha"
              />
              {errors.password ? <p>{errors.password.message}</p> : null}
              <StyledHeading2>Confirmar Senha</StyledHeading2>
              <Input
                type="password"
                register={register("currentPassword")}
                placeholder="Digite novamente sua senha"
              />
              {errors.currentPassword ? (
                <p>{errors.currentPassword.message}</p>
              ) : null}
              <StyledHeading2>Bio</StyledHeading2>
              <Input
                type="text"
                register={register("bio")}
                placeholder="Fale sobre você"
              />
              {errors.bio ? <p>{errors.bio.message}</p> : null}
              <StyledHeading2>Contato</StyledHeading2>
              <Input
                type="text"
                register={register("contact")}
                placeholder="Opção de contato"
              />
              {errors.contact ? <p>{errors.contact.message}</p> : null}
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
                <p>{errors.course_module.message}</p>
              ) : null}
              <StylesButton type="submit" buttonBackgraund="cadastro">
                Cadastrar
              </StylesButton>
            </form>
          </div>
        </div>
      </StyledSection>
    </>
  );
};
