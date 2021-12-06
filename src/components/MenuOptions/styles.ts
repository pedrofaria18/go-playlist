import styled from "styled-components";

interface ContainerProps {
  clicked: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: inline-block;

  button {
    background: none;
    border: 0;
  }

  div {
    display: none;
    position: absolute;
    right: 0;
    background-color: var(--menu);
    width: 180px;
    padding: 15px 10px;
    z-index: 1;

    p {
      color: var(--white);
      cursor: pointer;
    }

    hr {
      width: 100%;
      margin: 14px 0;
      color: red;
    }
  }

  &:hover div {
    display: ${(props) => (props.clicked ? "none" : "flex")};
    flex-direction: column;
    align-items: center;
  }
`;
