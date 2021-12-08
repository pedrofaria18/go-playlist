import { FormEvent, useState } from "react";
import { usePlaylists } from "../../hooks/usePlaylists";
import Modal from "../Modal";
import { Container, ErroMessage, Input } from "./styles";

interface ModalEditPlaylistProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export default function ModalEditPlaylist({
  isOpen,
  setIsOpen,
}: ModalEditPlaylistProps) {
  const { selectedPlaylist, editPlaylist } = usePlaylists();

  const [name, setName] = useState(selectedPlaylist.name);
  const [image, setImage] = useState(selectedPlaylist.image);

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

    await editPlaylist(selectedPlaylist.id, { name, image });

    setError({
      name: false,
      image: false,
    });
    setName("");
    setImage("");
    setIsOpen();
  }

  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
      <Container>
        <h1>Editar Playlist</h1>

        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome da Playlist"
            value={name}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setName(e.currentTarget.value)
            }
            error={error.name}
          />
          <ErroMessage error={error.name}>
            Por favor, preencha o nome da Playlist
          </ErroMessage>

          <Input
            type="text"
            placeholder="Link da foto da Playlist"
            value={image}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setImage(e.currentTarget.value)
            }
            error={error.image}
          />
          <ErroMessage error={error.image}>
            Por favor, preencha o link da foto da Playlist
          </ErroMessage>

          <div>
            <button type="submit">Editar playlist</button>
          </div>
        </form>
      </Container>
    </Modal>
  );
}
