import { useState } from "react";

import { usePlaylists } from "../../hooks/usePlaylists";

import Header from "../../components/Header";
import ModalNewPlaylist from "../../components/ModalNewPlaylist";
import Playlist from "../../components/Playlist";

import { PlaylistsContainer } from "./styles";

export default function Dashboard() {
  const { playlists } = usePlaylists();

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Header openModal={toggleModal} />

      <ModalNewPlaylist isOpen={modalOpen} setIsOpen={toggleModal} />

      <PlaylistsContainer>
        {playlists.map((playlist) => (
          <Playlist key={playlist.id} data={playlist} />
        ))}
      </PlaylistsContainer>
    </>
  );
}
