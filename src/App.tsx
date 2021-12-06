import { ToastContainer } from "react-toastify";

import { PlaylistsProvider } from "./hooks/usePlaylists";

import RoutesApp from "./routes";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <PlaylistsProvider>
      <GlobalStyle />
      <RoutesApp />
      <ToastContainer autoClose={3000} />
    </PlaylistsProvider>
  );
}

export default App;
