import styled from "styled-components";

export const Container = styled.div`
  padding: 48px 40px;

  h1 {
    font-size: 36px;
    font-weight: 600;
    color: var(--title);
    margin-bottom: 40px;
  }

  p {
    font-size: 18px;
    color: var(--body);
  }

  div {
    display: flex;
    gap: 32px;

    button {
      width: 195px;
      height: 48px;

      margin-top: 48px;

      background: var(--primary);
      color: var(--white);

      border: 0;
      border-radius: 8px;

      &:first-child {
        background: var(--white);
        color: var(--primary);
        border: 1px solid var(--primary);
      }
    }
  }

  @media (max-width: 900px) {
    padding: 24px 30px;

    h1 {
      text-align: center;
      font-size: 28px;
    }

    p {
      text-align: center;
    }

    div {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;

      button:last-child {
        margin-top: 24px;
      }
    }
  }
`;
