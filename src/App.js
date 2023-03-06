import './App.scss';
import "./styles/partials/_global.scss";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import components
import HomePage from "./pages/HomePage/HomePage.js";
import Resources from "./pages/Resources/Resources.js";
import EquipmentandSoftwarePage from "./pages/EquipmentandSoftwarePage/EquipmentandSoftwarePage.js";
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/resources" element={<Resources />}/>
          <Route path="/resources/equipment-and-software" element={<EquipmentandSoftwarePage />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
