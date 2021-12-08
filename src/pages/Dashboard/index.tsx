import { useState } from "react";

import { usePlaylists } from "../../hooks/usePlaylists";

import Header from "../../components/Header";
import ModalNewPlaylist from "../../components/ModalNewPlaylist";
import Playlist from "../../components/Playlist";

import { PlaylistsContainer } from "./styles";

export default function Dashboard() {
  const { playlists } = usePlaylists();

  const [modalCreatePlaylistOpen, setModalCreatePlaylistOpen] = useState(false);

  const toggleModal = () => {
    setModalCreatePlaylistOpen(!modalCreatePlaylistOpen);
  };

  return (
    <>
      <Header openModalCreatePlaylist={toggleModal} typeHeader="dashboard" />

      <ModalNewPlaylist
        isOpen={modalCreatePlaylistOpen}
        setIsOpen={toggleModal}
      />

      <PlaylistsContainer>
        {playlists.map((playlist) => (
          <Playlist key={playlist.id} playlist={playlist} />
        ))}
      </PlaylistsContainer>
    </>
  );
}
