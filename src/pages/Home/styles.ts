import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  flex-direction: column;

  padding: 20px;

  background: linear-gradient(360deg, #191716 0%, #2d2c2c 100%);
`;

export const InputWrapper = styled.div`
  display: flex;

  align-items: center;

  margin-top: 20px;
`;

export const Text = styled.p`
  font-size: 18px;

  line-height: 21px;

  color: #ffffff;
`;

export const Input = styled.input<{ size: number }>`
  display: flex;

  width: ${(props) => (props.size ? props.size + "px" : "50px")};

  background-color: #ffffff;

  border-radius: 5px;

  margin-left: 5px;

  font-size: 18px;

  line-height: 21px;

  color: #292828;

  ::placeholder {
    font-size: 18px;
    line-height: 21px;

    color: #292828;
  }
`;

export const Button = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 47px;

  background: #ffffff;

  border-radius: 20px;

  border: none;

  cursor: pointer;

  margin-top: 50px;

  transition: all 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`;

export const ButtonText = styled.p`
  font-size: 32px;
  line-height: 37px;

  color: #1e1d1c;
`;

export const Cost = styled.p`
  font-size: 80px;
  line-height: 92px;

  color: #ffffff;

  margin: auto;
  margin-top: 50px;
`;
