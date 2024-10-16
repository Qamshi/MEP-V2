// import React, { useState } from 'react';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { useTextareaContext } from './TextareaProvider'; 

// export default function BasicDateTimePicker() {
//   const { handleDateChange } = useTextareaContext(); // Consume handleDateChange from the context
//   const [selectedDateTime, setSelectedDateTime] = useState(null); // State to store the selected date and time

//   const handleChange = (newValue) => {
//     setSelectedDateTime(newValue); // Update the state with the new value
//     handleDateChange(newValue); // Call the handleDateChange function from the context
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DateTimePicker']}>
//         <DateTimePicker
//           label="Ad Schedule Time"
//           className="custom-width"
//           value={selectedDateTime} 
//           onChange={handleChange} 
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import * as React from 'react';
import { useTextareaContext } from './TextareaProvider';

export default function ResponsiveDateTimePickers() {
  const { selectedDate, handleDateChange } = useTextareaContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'MobileDateTimePicker',
        ]}
      >
        <DemoItem label="Ad Schedule">
          <MobileDateTimePicker
            value={selectedDate}
            onChange={handleDateChange}
            minDateTime={dayjs()}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}