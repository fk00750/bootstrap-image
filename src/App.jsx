// why the following code not working

import NavbarComp from "./Components/NavbarComp";
import FormComp from "./Components/FormComp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TableComp from "./Components/TableComp";

function App() {
  return (
    <>
      <div className="bg-color">
        <BrowserRouter>
          <NavbarComp />
          <Routes>
            <Route path="/" element={<FormComp />} />
            <Route path="/report" element={<TableComp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
