// import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
// import axios from 'axios';
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTextareaContext } from './TextareaProvider'; // Use context

// export default function App() {
//   const {  onOpenChange } = useDisclosure();
//   const navigate = useNavigate();
//   const {
//     productName,
//     websiteURL,
//     phoneNumber,
//     productDescription,
//     ageBracket,
//     adPurpose,
//     selectedGender,
//     platform,
//     userEmail,
//     userFirstName,
//     imageURL,
//     resetAll,
//     adAudience,
//     selectedDate,
//     selectedPlan,
//   } = useTextareaContext();
//   const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

//   const handleSubmit = async () => {
//     try {
//       const subscriptionResponse = await axios.get(`http://localhost:3000/subscription/${userEmail}`);
//       if (subscriptionResponse.data.exist) {
//         // Email exists in the subscription database, proceed with ad submission
//         console.log("Email exists in the subscription database");
//         const postData = {
//           productName,
//           websiteURL,
//           phoneNumber,
//           productDescription,
//           ageBracket,
//           adPurpose: Array.from(adPurpose),
//           selectedGender: Array.from(selectedGender),
//           platform,
//           userEmail,
//           userFirstName,
//           imageURL,
//           adAudience: Array.from(adAudience),
//           selectedDate,
//           selectedPlan,
//         };
//         const userDataResponse = await axios.post("http://localhost:3000/userdata", postData);
//         console.log("date", selectedDate);
//         console.log("Data saved:", userDataResponse.data.message); // Success log
//         resetAll();
//         setModalVisible(true); // Show modal after successful submission
//         setTimeout(() => {
//           setModalVisible(false); // Hide modal after 5 seconds
//           navigate("/landing"); // Redirect to the landing page
//         }, 3000);
//       } else {
//         // Email does not exist in the subscription database, navigate to payment page
//         console.log("Email does not exist in the subscription database");
//         navigate('/payment');
       
//       }
//     } catch (error) {
//       console.error("Error submitting data:", error); // Error handling
      
//     }
//   };

//   return (
//     <>
//       <Button
//         onPress={handleSubmit}
//         color="primary"
//         style={{ marginTop: '75px', marginLeft: '255px' }}
//       >
//         Submit
//       </Button>
//       <Modal
//         isOpen={modalVisible}
//         onOpenChange={onOpenChange}
//         placement="top-center"
//       >
//         <ModalContent>
//           <ModalHeader className="flex flex-col gap-1">Dear Customer</ModalHeader>
//           <ModalBody>
//             <div className="flex py-2 px-1 justify-between">
//               <p>Your ad is being reviewed. Kindly check your email for the confirmation.</p>
//             </div>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }







import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTextareaContext } from './TextareaProvider'; // Use context

export default function App() {
  const {  onOpenChange } = useDisclosure();
  const navigate = useNavigate();
  const {
    productName,
    websiteURL,
    phoneNumber,
    productDescription,
    ageBracket,
    adPurpose,
    selectedGender,
    platform,
    userEmail,
    userFirstName,
    imageURL,
    resetAll,
    adAudience,
    selectedDate,
    selectedPlan,
    niche,
  } = useTextareaContext();
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  const handleSubmit = async () => {
    try {
        const postData = {
          productName,
          websiteURL,
          phoneNumber,
          productDescription,
          ageBracket,
          adPurpose: Array.from(adPurpose),
          selectedGender: Array.from(selectedGender),
          platform,
          userEmail,
          userFirstName,
          imageURL,
          adAudience: Array.from(adAudience),
          selectedDate,
          selectedPlan,
          niche,
        };
        const userDataResponse = await axios.post("http://localhost:3000/userdata", postData);
        console.log("date", selectedDate);
        console.log("Data saved:", userDataResponse.data.message); // Success log
        console.log("data",postData);
        resetAll();
        setModalVisible(true); // Show modal after successful submission
        setTimeout(() => {
          setModalVisible(false); // Hide modal after 5 seconds
          navigate("/landing"); // Redirect to the landing page
        }, 3000);
    } catch (error) {
      console.error("Error submitting data:", error); // Error handling
    }
  };

  return (
    <>
      <Button
        onPress={handleSubmit}
        color="primary"
        style={{ marginTop: '75px', marginLeft: '255px' }}
      >
        Submit
      </Button>
      <Modal
        isOpen={modalVisible}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Dear Customer</ModalHeader>
          <ModalBody>
            <div className="flex py-2 px-1 justify-between">
              <p>Your ad is being reviewed. Kindly check your email for the confirmation.</p>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}






