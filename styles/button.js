import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const ButtonStyles = css`
  width: 100%;
  border-radius: 4.06066px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #f8f9fa;

  ${({ buttonBackgraund }) => {
    switch (buttonBackgraund) {
      case "pink":
        return css`
          background: #ff577f;
          border: 1.2182px solid #ff577f;
          width: 100%;
          height: 45px;
        `;
      case "gray":
        return css`
          background: #868e96;
          border: 1.2182px solid #868e96;
          width: 100%;
          height: 45px;
        `;
      case "return":
        return css`
          background: #212529;
          width: 4.25rem;
          height: 40px;
        `;
        case "cadastro":
        return css`
          background: #59323F;
          border: 1.2182px solid #59323F;
          width: 100%;
          height: 45px;
        `;
    }
  }}
`;
export const StylesButton = styled.button`
  ${ButtonStyles}
`;

export const StylesLink = styled(Link)`
  ${ButtonStyles}
`;
