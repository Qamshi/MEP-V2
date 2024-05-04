// OtpModal.js
import React, { useState } from "react";

function OtpModal({ onSubmit }) {
  const [otp, setOtp] = useState("");

  const handleSubmit = () => {
    onSubmit(otp);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Enter One-Time Password</h2>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default OtpModal;