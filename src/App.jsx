import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbaar } from "./components/Main/Navbar";
import { Home } from "./pages";

function App() {
  return (
    <>
      <Navbaar />
      <Home />
    </>
  );
}

export default App;
