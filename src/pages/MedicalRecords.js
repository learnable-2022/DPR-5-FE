import "../css/medicalrecords.css";
import search from "../images/search_icon.png";
import ChronicDisease from "../components/ChronicDisease";
import BloodGroup from "../components/BloodGroup";

const MedicalRecords = () => {
  return (
    <div className="medical-records main_container">
      <div className="info_section">
        <h2>Upload Medical Records</h2>
        <img className="search_icon" src={search} alt="" />
        <input type="search" placeholder="Search" />
      </div>
      <ChronicDisease />
      <BloodGroup />
      <p className="copyright">Copy Right @2023 MediSync</p>
    </div>
  );
};

export default MedicalRecords;
