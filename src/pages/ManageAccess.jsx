import React from "react";
import "../css/styles.css";

const ManageAccess = () => {
  return (
    <div className="manage_access">
      <h5>
        To grant anyone access to see your details, please input <br /> the
        person's name and wallet address
      </h5>
      <form>
        <label htmlFor="name">
          <p>Name</p>
          <input type="text" id="name" />
        </label>
        <label htmlFor="address">
          <p>Wallet Address</p>
          <input type="text" id="address" />
        </label>
      </form>
      <button>Grant Access</button>
      <h5>To revoke anyone's access, please input the wallet address</h5>
      <form>
        <label htmlFor="address2">
          <p>Wallet Address</p>
          <input type="text" id="address2" />
        </label>
      </form>
      <button>Revoke Access</button>
    </div>
  );
};

export default ManageAccess;
