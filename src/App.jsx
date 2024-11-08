import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Storepage from "./pages/Storepage";
import Adoptpg from "./pages/Adoptpg";
import Paymentpg from "./pages/Payment/Paymentpg"

import Navbarcomp from "./components/Navbarcomp";
import Footercomp from "./components/Footercomp";

function App() {
  return (
    <div>
      <Navbarcomp />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/Store" element={<Storepage />} />
          <Route path="/Adopt" element={<Adoptpg/>} />
          <Route path="/Payment" element={<Paymentpg />} />
        </Routes>
        <Footercomp />
    </div>
  );
}

export default App;
