import { Button, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTextareaContext } from './TextareaProvider'; // Use context
import axios from 'axios';


export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();
  const {
    productName,
    websiteURL,
    phoneNumber,
    productDescription,
    ageBracket,
    priceRange,
    adPurpose,
    selectedGender,
    platform,
    userEmail,
    userFirstName,
    imageURL,
    resetAll,
  } = useTextareaContext();

  const handleSubmit = async () => {
    const postData = {
      productName,
      websiteURL,
      phoneNumber,
      productDescription,
      ageBracket,
      priceRange,
      adPurpose: Array.from(adPurpose), // Converting Set to Array
      selectedGender: Array.from(selectedGender), // Converting Set to Array
      platform,
      userEmail,
      userFirstName,
      imageURL,
    };

    try {
      const response = await axios.post("http://localhost:3000/userdata", postData); // POST request
      console.log("Data saved:", response.data.message); // Success log
      resetAll();
    } catch (error) {
      console.error("Error submitting data:", error); // Error handling
    }
  };



  const handleHomePage = () => {
    navigate("/landing"); // Navigate to the landing page
  };

  const handleAdInsights = () => {
    navigate("/AdPerformance"); // Navigate to the insights page
  };

  return (
    <>
      <Button
        onPress={() => {
          onOpen(); // Call the onOpen function
          handleSubmit(); // Call the handleSubmit function
        }}
        color="primary"
        style={{ marginTop: '75px', marginLeft: '255px' }}
      >
        Submit
      </Button>     
       <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Dear Customer</ModalHeader>
              <ModalBody>
                <div className="flex py-2 px-1 justify-between">
                  <p>Your ad is being reviewed. Kindly check your email for the confirmation.</p>

                  <Link color="primary" href="#" size="sm" onClick={handleAdInsights}>
                    Insights
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose} onClick={handleHomePage}>
                  Back To Home
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
