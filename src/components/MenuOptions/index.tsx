import { useEffect, useState } from 'react';

import menuImg from '../../assets/menu.svg';

import { Container } from "./styles";

interface MenuOptionsProps {
  openModalEdit: () => void;
  openModalDelete: () => void;
  modalEditIsOpen: boolean;
  modalDeleteIsOpen: boolean;
}

export default function MenuOptions({ openModalEdit, openModalDelete, modalDeleteIsOpen, modalEditIsOpen }: MenuOptionsProps) {

  const [itemMenuIsClicked, setItemMenuIsClicked] = useState(false);

  useEffect(() => {
    !modalEditIsOpen && !modalDeleteIsOpen && setItemMenuIsClicked(false);
  }, [modalDeleteIsOpen, modalEditIsOpen]);

  return (
    <Container clicked={itemMenuIsClicked}>
      <button>
        <img src={menuImg} alt="Menu" />
      </button>

      <div>
        <p onClick={
          () => {
            setItemMenuIsClicked(!itemMenuIsClicked);
            openModalEdit();
          }
        }>Editar Playlist</p>
        <hr />
        <p onClick={
          () => {
            setItemMenuIsClicked(!itemMenuIsClicked);
            openModalDelete();
          }
        }>Remover Playlist</p>
      </div>
    </Container>
  )
}