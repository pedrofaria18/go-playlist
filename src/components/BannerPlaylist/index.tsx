import { Link } from 'react-router-dom';

import { usePlaylists } from '../../hooks/usePlaylists';

import logoImg from '../../assets/logo.svg';

import MenuOptions from '../MenuOptions';

import { Container, ContainerContent } from "./styles";

interface BannerPlaylistProps {
  openModalEdit: () => void;
  openModalDelete: () => void;
  modalEditIsOpen: boolean;
  modalDeleteIsOpen: boolean;
}

export default function BannerPlaylist({
  openModalEdit,
  openModalDelete,
  modalEditIsOpen,
  modalDeleteIsOpen,
}: BannerPlaylistProps) {
  const { selectedPlaylist } = usePlaylists();

  return (
    <Container>
      <ContainerContent>
        <header>
          <Link to="/">
            <img src={logoImg} alt="Logo GoPlaylist" />
          </Link>

          <MenuOptions openModalEdit={openModalEdit} openModalDelete={openModalDelete} modalEditIsOpen={modalEditIsOpen} modalDeleteIsOpen={modalDeleteIsOpen}/>
        </header>

        <main>
          <img src={selectedPlaylist.image} alt={selectedPlaylist.name} />

          <div className="content">
            <h1>{selectedPlaylist.name}</h1>
            <p>0 Músicas</p>
          </div>
        </main>
      </ContainerContent>
    </Container>
  )
}