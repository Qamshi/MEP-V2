// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "./Schedule.css"; // Assuming you have a CSS file for custom styles

// export default function Schedule() {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   return (
//     <DatePicker
//       selected={selectedDate}
//       onChange={(date) => setSelectedDate(date)}
//       dateFormat="MM/dd/yyyy h:mm aa"
//       showTimeSelect
//       timeFormat="HH:mm"
//       timeIntervals={15}
//       timeCaption="time"
//       className="custom-datepicker"
//     />
//   );
// }




// import React, { useContext } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "./Schedule.css";
// import { useTextareaContext } from "./TextareaProvider";

// export default function Schedule() {
//   const { selectedDate, handleDateChange } = useTextareaContext();

//   return (
//     <DatePicker
//   selected={selectedDate}
//   onChange={handleDateChange}
//   dateFormat="yyyy-MM-dd HH:mm" // Updated to 24-hour format
//   showTimeSelect
//   timeFormat="HH:mm"
//   timeIntervals={15}
//   timeCaption="time"
//   className="custom-datepicker"
// />
//   );
// }


