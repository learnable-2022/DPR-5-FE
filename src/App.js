import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import About from "./pages/About";
import Services from "./pages/Services";
import MedicalRecords from "./pages/MedicalRecords";
import Medical from "./pages/Medical";
import DashboardLayout from "./components/DashboardLayout";
import ConnectWallet from "./pages/ConnectWallet";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/services" element={<Services />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route
              path="/dashboard/connectwallet"
              element={<ConnectWallet />}
            />
            <Route
              path="/dashboard/medicalrecords"
              element={<MedicalRecords />}
            />
            <Route path="/dashboard/medical" element={<Medical />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
