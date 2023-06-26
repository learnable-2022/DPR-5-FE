import Allergies from "../components/Allergies";
// import BloodGroup from "../components/BloodGroup";
import Disabilities from "../components/Disabilities";
// import Genotype from "../components/Genotype";
import OtherInformations from "../components/OtherInformations";
// import Weight from "../components/Weight";
import AddPatientRecord from "../components/addPatientRecord";
import "../css/medical.css";
import "../css/viewMedicalRecords.css"

const ViewMedicalRecords = () => {
  return (
    <div className="medical-records main_container">
      <div className="info_section">
        {/* <BloodGroup />
        <Genotype />
        <Weight /> */}
        <AddPatientRecord/>
      </div>
      <div className="info_section2">
        <Disabilities />
        <Allergies />
        <OtherInformations />
      </div>
    </div>
  );
};

export default ViewMedicalRecords;
