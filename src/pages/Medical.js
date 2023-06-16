import "../css/styles.css";
import Medication from "../components/Medication";
import Select from "../components/Select";
import Sickness from "../components/Sickness";
import Symptoms from "../components/Symptoms";

const Medical = () => {
  return (
    <div className="medical-records main_container">
      <div className="info_section">
        <h2>LogBook</h2>
        <Select />
        <div className="date">
          <div className="from">
            <p>From Date</p>
          </div>
          <div className="to">
            <p>To Date</p>
          </div>
        </div>
      </div>
      <div className="details">
        <Symptoms />
        <Sickness />
        <Medication />
      </div>
      <p className="copyright">Copy Right @2023 MediSync</p>
    </div>
  );
};

export default Medical;
