import { FormEvent, useState } from "react";
import { usePlaylists } from "../../hooks/usePlaylists";

import Modal from "../Modal";

import { Container, ErroMessage, Input } from "./styles";

interface ModalNewPlaylistProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export default function ModalNewPlaylist({
  isOpen,
  setIsOpen,
}: ModalNewPlaylistProps) {
  const { createPlaylist } = usePlaylists();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const [error, setError] = useState({
    name: false,
    image: false,
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (name === "" && image === "") {
      setError({
        name: true,
        image: true,
      });
      return;
    } else if (name === "") {
      setError({
        name: true,
        image: false,
      });
      return;
    } else if (image === "") {
      setError({
        name: false,
        image: true,
      });
      return;
    }

    setError({
      name: false,
      image: false,
    });
    createPlaylist({
      name,
      image,
    });
    setName("");
    setImage("");
    setIsOpen();
  }

  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
      <Container>
        <h1>Nova Playlist</h1>

        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome da Playlist"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={error.name}
          />
          <ErroMessage error={error.name}>
            Por favor, preencha o nome da Playlist
          </ErroMessage>

          <Input
            type="text"
            placeholder="Link da foto da Playlist"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            error={error.image}
          />
          <ErroMessage error={error.image}>
            Por favor, preencha o link da foto da Playlist
          </ErroMessage>

          <div>
            <button type="submit">Criar playlist</button>
          </div>
        </form>
      </Container>
    </Modal>
  );
}
