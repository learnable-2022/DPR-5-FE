import React from "react";

const GetAllInfo = () => {
  return (
    <div class="medisync__wallet_details get-all-info">
      <h2>Put the wallet address of the patient to view his records</h2>
      <input type="text" placeholder="patient wallet address" />
      <button>view</button>
    </div>
  );
};

export default GetAllInfo;
