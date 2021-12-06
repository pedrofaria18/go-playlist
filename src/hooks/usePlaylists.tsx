import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

import api from "../api";

interface PlaylistContextData {
  playlists: PlaylistData[];
  selectedPlaylist: PlaylistData;
  createPlaylist: (data: PlaylistInput) => void;
  handlePlaylistSelected: (id: string) => void;
  editPlaylist: (id: string, data: PlaylistInput) => void;
  deletePlaylist: (id: string) => void;
}

export interface PlaylistData {
  id: string;
  name: string;
  image: string;
}

export type PlaylistInput = Omit<PlaylistData, "id">;

export interface PlaylistProviderProps {
  children: ReactNode;
}

export const PlaylistsContext = createContext({} as PlaylistContextData);

export function PlaylistsProvider({ children }: PlaylistProviderProps) {
  const [playlists, setPlaylists] = useState<PlaylistData[]>([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState<PlaylistData>(
    {} as PlaylistData
  );

  useEffect(() => {
    async function loadPlaylists() {
      const response = await api.get("/playlists");
      setPlaylists(response.data);
    }
    loadPlaylists();
  }, []);

  async function createPlaylist(data: PlaylistInput) {
    try {
      const response = await api.post("/playlists", data);
      setPlaylists([...playlists, response.data]);
      toast.success("Playlist criada com sucesso");
    } catch (err) {
      toast.error("Erro ao criar playlist");
    }
  }

  async function editPlaylist(id: string, data: PlaylistInput) {
    try {
      const response = await api.put(`/playlists/${id}`, data);
      const newPlaylists = playlists.map((playlist) =>
        playlist.id === id ? response.data : playlist
      );
      setPlaylists(newPlaylists);
      setSelectedPlaylist(response.data);
      toast.success("Playlist editada com sucesso");
    } catch (err) {
      toast.error("Erro ao editar playlist");
    }
  }

  async function deletePlaylist(id: string) {
    try {
      await api.delete(`/playlists/${id}`);
      const newPlaylists = playlists.filter((playlist) => playlist.id !== id);
      setPlaylists(newPlaylists);
      toast.success("Playlist deletada com sucesso");
    } catch (err) {
      toast.error("Erro ao deletar playlist");
    }
  }

  async function handlePlaylistSelected(id: string) {
    const response = await api.get(`/playlists/${id}`);
    setSelectedPlaylist(response.data);
  }

  return (
    <PlaylistsContext.Provider
      value={{
        playlists,
        selectedPlaylist,
        handlePlaylistSelected,
        createPlaylist,
        editPlaylist,
        deletePlaylist,
      }}
    >
      {children}
    </PlaylistsContext.Provider>
  );
}

export function usePlaylists() {
  const context = useContext(PlaylistsContext);
  return context;
}
