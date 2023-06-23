import no_records from "../images/no_record.png";

const MyRecordDisabilities = () => {
  return (
    <>
      <h3>Disabilities</h3>
      <span>
        <div className="disabilities_card">
          <img src={no_records} alt="" />
          <p>No Record Yet</p>
        </div>
      </span>
    </>
  );
};

export default MyRecordDisabilities;
