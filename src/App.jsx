import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main.jsx";
import Functioning from "./components/Functioning.jsx";
import Root from "./components/Root.jsx";
import Ressources from "./components/Ressources.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Main />} />
          <Route path="/fonctionnement" element={<Functioning />} />
          <Route path="/ressources" element={<Ressources />} />
        </Route>
      </Routes>
      {/* <Main></Main> */}
      {/* <Footer></Footer> */}
    </BrowserRouter>
  );
}

export default App;
