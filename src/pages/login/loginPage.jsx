import Logo from "../../../src/assets/img/Logo.svg";
import {
  StyledHeading1,
  StyledHeading2,
  Styledbody,
} from "../../../styles/typography";
import { StyledSection } from "./style";
import { StylesButton } from "../../../styles/button";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../src/components/input";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { UserContext } from "../../../src/providers/UserContext";

export const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const { loginUser } = useContext(UserContext);

  const submit = async (formData) => {
    await loginUser(formData, setLoading);
    reset();
  };

  return (
    <>
      <StyledSection>
        <div className="containner">
          <header>
            <img src={Logo} alt="" />
          </header>
          <div className="div_form">
            <StyledHeading1>Login</StyledHeading1>
            <form onSubmit={handleSubmit(submit)}>
              <StyledHeading2>Email</StyledHeading2>
              <Input
                type="email"
                register={register("email")}
                placeholder="Digite seu email"
              />
              <StyledHeading2>Senha</StyledHeading2>
              <Input
                type="password"
                register={register("password")}
                placeholder="Digite sua senha"
              />
              <StylesButton
                type="submit"
                buttonBackgraund="pink"
                disable={loading}
              >
                {loading ? "Entrando..." : "Entrar"}
              </StylesButton>
              <div className="div_p">
                <Styledbody>Ainda não possui uma conta?</Styledbody>
              </div>
              <StylesButton
              type="button"
                onClick={() => navigate("/register")}
                buttonBackgraund="gray"
              >
                Cadastre-se
              </StylesButton>
            </form>
          </div>
        </div>
      </StyledSection>
    </>
  );
};
