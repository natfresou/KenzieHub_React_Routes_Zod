import Logo from "../../assets/img/Logo.svg";
import {
  StyledHeading,
  StyledHeading1,
  StyledHeading2
} from "../../../styles/typography";
import { StyledSection } from "./style";
import { StylesButton } from "../../../styles/button";
import { useContext } from "react";
import { UserContext } from "../../../src/providers/UserContext";


export const HomePage = () => {
  const { user,logaut } = useContext(UserContext);

 
  return (
    <StyledSection>
      <div className="containner">
        <header>
          <img src={Logo} alt="" />
          <StylesButton onClick={() => logaut()} buttonBackgraund="return">
            Sair
          </StylesButton>
        </header>
        <div className="div_caixa">
          <div className="div_olaContainner">
            <div className="div_ola">
              <StyledHeading1> Olá, {user?.name}</StyledHeading1>
              <StyledHeading2>{user?.course_module}</StyledHeading2>
            </div>
          </div>

          <div className="sorryMsg">
            <StyledHeading1>
              Que pena! Estamos em desenvolvimento {":("}
            </StyledHeading1>
            <StyledHeading>
              Nossa Aplicação está em desenvolvimento, em breve teremos
              novidadades.
            </StyledHeading>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};
