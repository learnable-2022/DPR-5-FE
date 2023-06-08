import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import About from "./pages/About";
import Services from "./pages/Services";
import DashboardLayout from "./components/DashboardLayout";
import ConnectWallet from "./pages/ConnectWallet";
import ViewMedicalRecords from "./pages/ViewMedicalRecords";
import ViewOtherRecords from "./pages/ViewOtherRecords";

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
              element={<ViewMedicalRecords />}
            />
            <Route path="/dashboard/medical" element={<ViewOtherRecords />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
