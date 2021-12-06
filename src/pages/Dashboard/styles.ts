import styled from "styled-components";

export const PlaylistsContainer = styled.div`
  width: 100%;
  max-width: 1280px;

  margin: 0 auto;
  margin-top: -120px;

  padding: 30px 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    padding: 30px 30px;
    margin-top: 0px;
  }
`;
