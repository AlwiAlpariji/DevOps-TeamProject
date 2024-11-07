import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Marketpage from "./pages/Marketpage";
import Aboutpg from "./pages/Aboutpg";
import Wrapper from "./components/Wrapper";

import Navbarcomp from "./components/Navbarcomp";
import Footercomp from "./components/Footercomp";

function App() {
  return (
    <div>
      <Navbarcomp />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Market" element={<Marketpage />} />
          <Route path="/About" element={<Aboutpg />} />
        </Routes>
        <Footercomp />
    </div>
  );
}

export default App;
