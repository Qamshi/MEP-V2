// NewPasswordModal.js
import React, { useState } from "react";

function NewPasswordModal({ onSubmit }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    onSubmit(newPassword, confirmPassword);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Enter New Password</h2>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        <button onClick={handleSubmit}>Update</button>
      </div>
    </div>
  );
}

export default NewPasswordModal;