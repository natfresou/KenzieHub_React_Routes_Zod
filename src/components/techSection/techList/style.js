import styled from "styled-components";

export const StyledUl = styled.ul`
  width: 100%;
  max-width: 1000px;
  background-color: #212529;
  padding: 1rem;
  gap: 1rem;
  max-height: 700px;
  overflow-y: auto;

  .li_div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: #121214;
    height: 40px;
    align-items: center;
  }
  p {
    color: #868e96;
  }
`;
