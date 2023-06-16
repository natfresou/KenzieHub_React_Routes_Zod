import { toast } from "react-toastify";
import Logo from "../../src/assets/img/Logo.svg";
import {
  StyledHeading1,
  StyledHeading2,
  Styledbody,
} from "../../styles/typography";
import { StyledSection } from "./style";
import { StylesButton } from "../../styles/button";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/input";
import { api } from "../../src/services/api";
import { useForm } from "react-hook-form";

export const LoginPage = ({ setUser }) => {
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const loginUser = async (dat) => {
    try {
      const { data } = await api.post("/sessions", dat);
      setUser(data.user);
      toast.error("Login realizado com sucesso");
      localStorage.setItem("@TOKEN", JSON.stringify(data.token));
      localStorage.setItem("@USERID", JSON.stringify(data.user.id));
      navigate("/home");
    } catch (error) {
      toast.error("Erro no Login, tente novamente.");
    }
  };

  const submit = async (formData) => {
    await loginUser(formData);
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
                required
              />
              <StyledHeading2>Senha</StyledHeading2>
              <Input
                type="password"
                register={register("password")}
                placeholder="Digite sua senha"
                required
              />
              <StylesButton type="submit" buttonBackgraund="pink">
                Entrar
              </StylesButton>
              <div className="div_p">
                <Styledbody>Ainda não possui uma conta?</Styledbody>
              </div>
              <StylesButton
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
