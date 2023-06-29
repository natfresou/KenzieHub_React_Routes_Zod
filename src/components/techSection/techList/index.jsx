import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import { StyledUl } from "./style";
import { UserContext } from "../../../providers/UserContext";

export const UserTech = () => {
  const { userTechList, setIsDelChange } = useContext(TechContext);
  const { setIsOpenModal } = useContext(UserContext);

  const takeID = (tech) => {
    setIsOpenModal(true);
    setIsDelChange(tech);
  };

  return (
    <StyledUl>
      {userTechList.map((tech) => (
        <li key={tech.id} onClick={() => takeID(tech)}>
          <div className="li_div">
            <h3>{tech.title}</h3>
            <p>{tech.status}</p>
          </div>
        </li>
      ))}
    </StyledUl>
  );
};
