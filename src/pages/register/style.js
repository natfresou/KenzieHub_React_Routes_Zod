import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  background: #000000;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  box-sizing: border-box;

  header {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    margin-top: 3rem;
  }

  .containner {
    max-width: 400px;
    max-height: 1000px;
    width: 100%;
    padding: 1rem;
    background: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #f8f9fa;

    img {
      margin-bottom: 16px;
    }
  }
  .div_form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #212529;
    width: 100%;
    height: 100%;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;
    padding: 1rem;

    h1 {
      margin-bottom: 1rem;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  select {
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    padding: 0px 16.2426px;
    width: 100%;
    height: 45px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #868e96;
  }

  input {
 color:white;
  }
  input:hover {
    border: 1.2182px solid #f8f9fa;
  }
`;
