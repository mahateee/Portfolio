import "./App.css";
import Welcome from "./pages/Welcome";
import About from "./pages/About";

function App() {
  let textPath = `<textPath xlink:href="#myTextPath">
    <tspan dy="5">Text along a curved path...</tspan>
  </textPath>`;
  // let textPath = `<textPath class="coloring" xlink:href="#textPath" startOffset="0%">- Itay Haephrati - UX Engineer - COM-MANDO.COM - Itaycode@gmail.com</textPath>

  return (
    <>
      <Welcome />
      <About />
    </>
  );
}

export default App;
