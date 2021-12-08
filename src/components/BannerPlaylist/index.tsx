import { usePlaylists } from "../../hooks/usePlaylists";

import { Container, ContainerContent } from "./styles";

export default function BannerPlaylist() {
  const { selectedPlaylist } = usePlaylists();

  return (
    <Container>
      <ContainerContent>
        <main>
          <img src={selectedPlaylist.image} alt={selectedPlaylist.name} />

          <div>
            <h1>{selectedPlaylist.name}</h1>
            <p>0 Músicas</p>
          </div>
        </main>
      </ContainerContent>
    </Container>
  );
}
