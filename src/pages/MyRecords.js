import MyRecordAllergies from "../components/MyRecordAllergies";
import MyRecordDisabilities from "../components/MyRecordDisabilities";
import MyRecordOtherInformation from "../components/MyRecordOtherInformation";
import GetPatientRecord from "../components/myPatientRecord"
import MyRecordsBloodGroup from "../components/MyRecordsBloodGroup";
import MyRecordsGenotype from "../components/MyRecordsGenotype";
import MyRecordsWeight from "../components/MyRecordsWeight";
import "../css/styles.css";

const MyRecords = () => {
  return (
    <div className="medical-records main_container">
      <div className="info_section">
        <GetPatientRecord />
      </div>
      <MyRecordDisabilities />
      <MyRecordAllergies />
      <MyRecordOtherInformation />
    </div>
  );
};

export default MyRecords;