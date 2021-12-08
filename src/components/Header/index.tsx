import { Link } from "react-router-dom";

import MenuOptions from "../MenuOptions";

import logoImg from "../../assets/logo.svg";

import { Container } from "./styles";

interface HeaderProps {
  openModalCreatePlaylist?: () => void;
  openModalEditPlaylist?: () => void;
  openModalDeletePlaylist?: () => void;
  modalEditPlaylistIsOpen?: boolean;
  modalDeletePlaylistIsOpen?: boolean;
  typeHeader: "dashboard" | "playlist";
}

export default function Header({
  openModalCreatePlaylist,
  openModalEditPlaylist,
  openModalDeletePlaylist,
  modalEditPlaylistIsOpen,
  modalDeletePlaylistIsOpen,
  typeHeader,
}: HeaderProps) {
  return (
    <Container typeHeader={typeHeader}>
      <header>
        <Link to="/">
          <img src={logoImg} alt="Logo GoPlaylist" />
        </Link>

        {typeHeader === "dashboard" ? (
          <>
            <button
              className="button-desktop"
              type="button"
              onClick={openModalCreatePlaylist}
            >
              Nova Playlist
            </button>

            <button
              className="button-mobile"
              type="button"
              onClick={openModalCreatePlaylist}
            >
              +
            </button>
          </>
        ) : (
          <MenuOptions
            openModalEdit={openModalEditPlaylist}
            openModalDelete={openModalDeletePlaylist}
            modalEditIsOpen={modalEditPlaylistIsOpen}
            modalDeleteIsOpen={modalDeletePlaylistIsOpen}
          />
        )}
      </header>
    </Container>
  );
}
