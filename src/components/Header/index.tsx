import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.svg";

import { Container } from "./styles";

interface HeaderProps {
  openModal: () => void;
}

export default function Header({ openModal }: HeaderProps) {
  return (
    <Container>
      <header>
        <Link to="/">
          <img src={logoImg} alt="Logo GoPlaylist" />
        </Link>

        <button className="button-desktop" type="button" onClick={openModal}>
          Nova Playlist
        </button>

        <button className="button-mobile" type="button" onClick={openModal}>
          +
        </button>
      </header>
    </Container>
  );
}
