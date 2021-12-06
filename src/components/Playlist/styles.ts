import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  cursor: pointer;

  .image {
    width: 100%;
    height: 192px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 1100px) {
    .image {
      height: 132px;
    }
  }
`;

export const ContainerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 30px;

  h1 {
    font-size: 24px;
    font-weight: 600;
    color: var(--body);
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: var(--body);
    margin-top: 8px;
  }
`;
