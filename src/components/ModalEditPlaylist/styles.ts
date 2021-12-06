import styled from "styled-components";

interface Props {
  error: boolean;
}

export const Container = styled.div`
  padding: 48px 40px;

  h1 {
    font-size: 36px;
    font-weight: 600;
    color: var(--title);
    margin-bottom: 40px;
  }

  form {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      align-self: flex-end;

      button {
        width: 195px;
        height: 48px;

        margin-top: 48px;

        background: var(--primary);
        color: var(--white);

        border: 0;
        border-radius: 8px;
      }
    }
  }

  @media (max-width: 900px) {
    padding: 24px 16px;

    form {
      div {
        align-self: center;
      }
    }
  }
`;

export const Input = styled.input<Props>`
  width: 610px;
  height: 60px;

  border: ${(props) => (props.error ? "1px solid var(--error)" : "0")};
  border-radius: 8px;

  background: var(--white);
  color: var(--body);

  font-size: 16px;
  font-weight: 400;

  padding: 0 24px;

  &::placeholder {
    opacity: 0.7;
    color: var(--placeholder);
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 0 12px;
  }
`;

export const ErroMessage = styled.p<Props>`
  display: ${(props) => (props.error ? "flex" : "none")};

  font-size: 14px;
  color: var(--error);

  margin-top: 8px;

  & + input {
    margin-top: 24px;
  }
`;
