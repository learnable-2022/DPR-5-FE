import Allergies from "../components/Allergies";
//import BloodGroup from "../components/BloodGroup";
import Disabilities from "../components/Disabilities";
//import Genotype from "../components/Genotype";
import OtherInformations from "../components/OtherInformations";
//import Weight from "../components/Weight";
import "../css/medical.css";
import AddPatientRecord from "../components/addPatientRecord";

const ViewMedicalRecords = () => {
  return (
    <div className="medical-records main_container">
      <div className="info_section">
      
        <AddPatientRecord/>
      </div>
      <Disabilities />
      <Allergies />
      <OtherInformations />
    </div>
  );
};

export default ViewMedicalRecords;
