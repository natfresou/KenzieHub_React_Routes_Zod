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

  .containner {
    max-width: 400px;
    max-height: 600px;
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

  h5 {
    color: yellow;
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
  }

  .div_p {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  input {
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    border-radius: 4px;
    padding: 0px 16.2426px;
    gap: 10.15px;
    width: 100%;
    height: 48px;
    color: white;
  }

  input:hover {
    border: 1.2182px solid #f8f9fa;
  }

  p {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }
`;
