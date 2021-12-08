import styled from "styled-components";

interface ContainerProps {
  typeHeader: string;
}

export const Container = styled.div<ContainerProps>`
  background: var(--primary);
  padding: 30px 0;

  header {
    max-width: 1280px;
    margin: 0 auto;
    padding: ${(props: { typeHeader: string }) =>
      props.typeHeader === "dashboard" ? "0 0 140px" : "0"};
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      display: flex;
      align-items: center;
    }

    button {
      height: 48px;

      background: var(--primary-light);
      color: var(--white);

      padding: 0 32px;

      border: 0;
      border-radius: 8px;
    }

    .button-mobile {
      display: none;
    }
  }

  @media (max-width: 1100px) {
    header {
      width: 100%;
      padding: 0 20px;

      img {
        width: 90%;
      }

      .button-mobile {
        display: flex;
        align-items: center;
        font-size: 32px;
      }

      .button-desktop {
        display: none;
      }
    }
  }
`;
