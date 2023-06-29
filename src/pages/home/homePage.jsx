import Logo from "../../assets/img/Logo.svg";
import {
  StyledHeading,
  StyledHeading1,
  StyledHeading2,
} from "../../styles/typography";
import { StyledSection } from "./style";
import { StylesButton } from "../../styles/button";
import { useContext } from "react";
import { UserContext } from "../../../src/providers/UserContext";
import { Modal } from "../../components/modal/modalCastrarTech/index";
import { TechContext } from "../../providers/TechContext";
import { UserTech } from "../../components/techSection/techList/index";
import { ModalTechChange } from "../../components/modal/modalChangeTech";

export const HomePage = () => {
  const { user, logaut } = useContext(UserContext);
  const { setIsOpen, isOpen, isOpenModal } = useContext(UserContext);

  return (
    <>
      {isOpen ? <Modal /> : null}
      {isOpenModal ? <ModalTechChange /> : null}
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

            <div className="tecnologias_containner">
              <div className="tecnologias_header">
                <StyledHeading1>Tecnologias</StyledHeading1>
                <div
                  className="tecnologias_headerPlus"
                  onClick={() => setIsOpen(true)}
                >
                  <StyledHeading>+</StyledHeading>
                </div>
              </div>
              <div>
                <UserTech />
              </div>
            </div>
          </div>
        </div>
      </StyledSection>
    </>
  );
};
