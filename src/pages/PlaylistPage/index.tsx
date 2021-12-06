import { useState } from "react";

import BannerPlaylist from "../../components/BannerPlaylist";
import ModalDeletePlaylist from "../../components/ModalDeletePlaylist";
import ModalEditPlaylist from "../../components/ModalEditPlaylist";

import { Container } from "./styles";

export default function PlaylistPage() {
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

  const toggleModalEdit = () => {
    setModalEditOpen(!modalEditOpen);
  };

  const toggleModalDelete = () => {
    setModalDeleteOpen(!modalDeleteOpen);
  };

  return (
    <Container>
      <ModalEditPlaylist isOpen={modalEditOpen} setIsOpen={toggleModalEdit} />
      <ModalDeletePlaylist
        isOpen={modalDeleteOpen}
        setIsOpen={toggleModalDelete}
      />
      <BannerPlaylist
        openModalEdit={toggleModalEdit}
        openModalDelete={toggleModalDelete}
        modalEditIsOpen={modalEditOpen}
        modalDeleteIsOpen={modalDeleteOpen}
      />
    </Container>
  );
}
