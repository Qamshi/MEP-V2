// import React from "react";

// const PasswordRecovery = ({
//   state,
//   handleChange,
//   handleConfirm,
//   isConfirming,
//   handleOnSubmit,
// }) => {
//   return (
//     <>
//       {!isConfirming && (
//         <>
//           <input
//             type="email"
//             placeholder="Email"
//             name="email"
//             value={state.email}
//             onChange={handleChange}
//             className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
//           />
//           <button
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors duration-300"
//             onClick={handleConfirm}
//           >
//             Send OTP
//           </button>
//         </>
//       )}
//       {isConfirming && (
//         <>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             name="otp"
//             value={state.otp}
//             onChange={handleChange}
//             className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
//           />
//           <input
//             type="password"
//             placeholder="New Password"
//             name="newPassword"
//             value={state.newPassword}
//             onChange={handleChange}
//             className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             name="confirmPassword"
//             value={state.confirmPassword}
//             onChange={handleChange}
//             className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
//           />
//           <button
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors duration-300"
//             onClick={handleOnSubmit}
//           >
//             Submit
//           </button>
//         </>
//       )}
//     </>
//   );
// };

// export default PasswordRecovery;



import React from "react";

function PasswordRecovery({ state, handleChange, handleConfirm, handleSendOTP, handlePasswordReset, isConfirming }) {
  return (
    <div className="password-recovery-container space-y-4">
      {!isConfirming ? (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={state.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
          />
          <button
            type="button"
            onClick={handleSendOTP}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors duration-300"
          >
            Send OTP
          </button>
          <input
            type="text"
            placeholder="Enter OTP"
            name="otp"
            value={state.otp}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
          />
          <button
            type="button"
            onClick={handleConfirm}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors duration-300"
          >
            Verify OTP
          </button>
        </>
      ) : (
        <>
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
            type="button"
            onClick={handlePasswordReset}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors duration-300"
          >
            Reset Password
          </button>
        </>
      )}
    </div>
  );
}

export default PasswordRecovery;