import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  background: #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  color: white;
  padding: 1rem;

  header {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }
  .containner {
    max-width: 800px;
    height: 500px;
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
  .div_caixa {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;

    h1 {
      margin-bottom: 1rem;
    }
  }
  .div_ola {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: 80px;
    gap: 2rem;
    width: 100%;
    border-top: 2px solid #212529;
    border-bottom: 2px solid #212529;
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
  }

  input:hover {
    border: 1.2182px solid #f8f9fa;
  }

  .sorryMsg {
    margin-top: 3rem;
  }
`;
