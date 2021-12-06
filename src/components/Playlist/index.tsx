import { useNavigate } from "react-router";

import { PlaylistData, usePlaylists } from "../../hooks/usePlaylists";

import { Container, ContainerContent } from "./styles";

interface PlaylistProps {
  data: PlaylistData;
}

export default function Playlist({ data }: PlaylistProps) {
  const navigate = useNavigate();

  const { handlePlaylistSelected } = usePlaylists();

  const handlePlaylistClick = async () => {
    await handlePlaylistSelected(data.id);
    navigate(`/playlist/${data.id}`);
  }

  return (
    <Container onClick={handlePlaylistClick}>
      <div className="image">
        <img src={data.image} alt={data.name} />
      </div>

      <ContainerContent>
        <h1>{data.name}</h1>
        <p>0 Músicas</p>
      </ContainerContent>
    </Container>
  );
}
