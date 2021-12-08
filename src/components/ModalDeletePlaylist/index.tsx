import { FormEvent } from "react";
import { useNavigate } from "react-router";
import { usePlaylists } from "../../hooks/usePlaylists";
import Modal from "../Modal";
import { Container } from "./styles";

interface ModalDeletePlaylistProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export default function ModalDeletePlaylist({
  isOpen,
  setIsOpen,
}: ModalDeletePlaylistProps) {
  const navigate = useNavigate();

  const { selectedPlaylist, deletePlaylist } = usePlaylists();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await deletePlaylist(selectedPlaylist.id);

    setIsOpen();
    navigate("/");
  }

  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
      <Container>
        <h1>Remover Playlist</h1>

        <p>
          Deseja excluir a playlist <br />
          {selectedPlaylist.name}?
        </p>

        <div>
          <button type="button" onClick={setIsOpen}>
            Cancelar
          </button>
          <button type="button" onClick={handleSubmit}>
            Excluir playlist
          </button>
        </div>
      </Container>
    </Modal>
  );
}
