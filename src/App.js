import logo from "./logo.svg";
import "./App.css";
import FocusApp from "./components/FocusApp";
import CopyApp from "./components/CopyApp";
import MediaPlayer from "./components/MediaPlayer";
import ScrollAnimation from "./components/ScrollAnimation";
import RenderApp from "./components/RenderApp";
import LoadingApp from "./components/LoadingApp";

function App() {
  return (
    <div className="App">
      <LoadingApp />

      {/*<hr />
      <RenderApp />*/}

      {/*<hr />
      <ScrollAnimation />*/}

      {/*<hr />
      <MediaPlayer />*/}

      {/*<hr />
      <CopyApp />*/}

      {/*<hr />
      <FocusApp />*/}
    </div>
  );
}

export default App;
