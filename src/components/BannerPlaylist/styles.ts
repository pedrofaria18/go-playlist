import styled from "styled-components";

export const Container = styled.div`
  background: var(--primary);
  padding: 30px 0;
`;

export const ContainerContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  header {
    padding: 0 0 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      cursor: pointer;
    }
  }

  main {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;

    img {
      width: 400px;
      height: 250px;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 12px;

      h1 {
        color: var(--white);

        font-size: 68px;
        font-weight: 700;

        text-overflow: ellipsis;
        display: inline-block;
        width: 700px;
        overflow: hidden;
      }

      p {
        color: var(--white);
        font-size: 24px;
        font-weight: 400;
      }
    }
  }

  @media (max-width: 1280px) {
    header {
      padding: 0 20px 30px 20px;
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 0 10px;

      img {
        width: 90%;
      }

      div {
        h1 {
          width: 100%;
          font-size: 2.5rem;
        }

        p {
          width: 100%;
          font-size: 1.5rem;
        }
      }
    }
  }
`;
