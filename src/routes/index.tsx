import { Route, Routes, BrowserRouter } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import PlaylistPage from "../pages/PlaylistPage";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/playlist/:id" element={<PlaylistPage />} />
      </Routes>
    </BrowserRouter>
  );
}
