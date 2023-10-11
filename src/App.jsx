import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./pages/Home/Home";
import HotelLayout from "./components/HotelLayout/HotelLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<HotelLayout />}>
            <Route path=":id" element={<div>single hotel</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
