import React from "react";

const InfoSection = () => {
  return (
    <div>
      <section>
        <h2>Blood Group</h2>
        <input type="text" />
      </section>
      <section>
        <h2>Genotype</h2>
        <input type="text" />
        <h2>Weight (kg)</h2>
        <input type="text" />
      </section>
      <button>add</button>
    </div>
  );
};

export default InfoSection;
