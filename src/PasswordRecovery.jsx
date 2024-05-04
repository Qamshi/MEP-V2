import React from "react";

const PasswordRecovery = ({
  state,
  handleChange,
  handleConfirm,
  isConfirming,
  handleOnSubmit,
}) => {
  return (
    <>
      {!isConfirming && (
        <>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={state.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
          />
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors duration-300"
            onClick={handleConfirm}
          >
            Send OTP
          </button>
        </>
      )}
      {isConfirming && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            name="otp"
            value={state.otp}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
          />
          <input
            type="password"
            placeholder="New Password"
            name="newPassword"
            value={state.newPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={state.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
          />
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors duration-300"
            onClick={handleOnSubmit}
          >
            Submit
          </button>
        </>
      )}
    </>
  );
};

export default PasswordRecovery;