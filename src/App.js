import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Demo from "./pages/Demo";
import About from "./pages/About";
import Services from "./pages/Services";
import Web3 from "./pages/Web3";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DashboardLayout from "./components/DashboardLayout";
import ViewMedicalRecords from "./pages/ViewMedicalRecords";
import ViewOtherRecords from "./pages/ViewOtherRecords";
import ManageAccess from "./pages/ManageAccess";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConnectWallets from "./pages/ConnectWallet";

const App = () => {
  return (
    <div>
      <ToastContainer position="bottom-right" limit={1} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/services" element={<Services />} />
          <Route path="/web3" element={<Web3 />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/connectwallet" element={<ConnectWallets />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route
              path="/dashboard/medicalrecords"
              element={<ViewMedicalRecords />}
            />
            <Route path="/dashboard/medical" element={<ViewOtherRecords />} />
            <Route path="/dashboard/manageaccess" element={<ManageAccess />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
