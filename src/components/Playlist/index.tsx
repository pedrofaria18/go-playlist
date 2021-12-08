import { useNavigate } from "react-router";

import { PlaylistData, usePlaylists } from "../../hooks/usePlaylists";

import { Container, ContainerContent } from "./styles";

interface PlaylistProps {
  playlist: PlaylistData;
}

export default function Playlist({ playlist }: PlaylistProps) {
  const navigate = useNavigate();

  const { handlePlaylistSelected } = usePlaylists();

  const handlePlaylistClick = async () => {
    await handlePlaylistSelected(playlist.id);
    navigate(`/playlist/${playlist.id}`);
  };

  return (
    <Container onClick={handlePlaylistClick}>
      <div className="image">
        <img src={playlist.image} alt={playlist.name} />
      </div>

      <ContainerContent>
        <h1>{playlist.name}</h1>
        <p>0 Músicas</p>
      </ContainerContent>
    </Container>
  );
}
