import { Button } from "./components/Button";
import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";

import { api } from "./services/api";

import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";
import { MoviesProvider } from "./hooks/useMoviesContext";

export function App() {
  return (
    <MoviesProvider>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <Content />
      </div>
    </MoviesProvider>
  );
}
