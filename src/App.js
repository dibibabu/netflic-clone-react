import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { originals, action, documentaries, horror } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title="Netflix Originals" url={originals} />
      <RowPost title="Action" isSmall url={action} />
      <RowPost title="Horror" isSmall url={horror} />
      <RowPost title="Documentaries" isSmall url={documentaries} />
    </div>
  );
}

export default App;
