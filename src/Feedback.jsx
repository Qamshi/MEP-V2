import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import axios from 'axios';
import React, { useState } from "react";

export default function App() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [formError, setFormError] = useState(false);
  const [feedbackType, setFeedbackType] = useState("general");
  const [showSubmitMessage, setShowSubmitMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (email.trim() === "" || feedback.trim() === "" || !email.includes("@") || !email.endsWith(".com")) {
      setFormError(true);
      return;
    }

    try {
      setIsSubmitting(true);
      await axios.post('https://feeder-node-1337.herokuapp.com/feedback/create', {
        projectId: '663b2d52c750c70002019467',
        feedbackMsg: feedback,
        feedbackType,
        feedbackEmail: email,
      });

      console.log("Email:", email);
      console.log("Feedback:", feedback);
      console.log("Feedback Type:", feedbackType);
      setFormError(false);
      setShowSubmitMessage(true);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setFormError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setEmail("");
    setFeedback("");
    setShowSubmitMessage(false);
    onClose();
  };

  return (
    <>
      <Button color="foreground" onPress={onOpen}>
        Feedback
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={handleClose}
        radius="lg"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">User Feedback</ModalHeader>
              <ModalBody>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <p style={{ marginTop: '10px' }}>Feedback Type:</p>
                    <div className="flex gap-4">
                      <Button
                        color={feedbackType === "general" ? "primary" : "secondary"}
                        onClick={() => setFeedbackType("general")}
                      >
                        General
                      </Button>
                      <Button
                        color={feedbackType === "bug" ? "primary" : "secondary"}
                        onClick={() => setFeedbackType("bug")}
                      >
                        Bug
                      </Button>
                      <Button
                        color={feedbackType === "other" ? "primary" : "secondary"}
                        onClick={() => setFeedbackType("other")}
                      >
                        Other
                      </Button>
                    </div>
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full bg-[#19172c] border-[#292f46] border rounded-md px-4 py-2 focus:outline-none focus:border-[#4a89e8] ${
                      formError && (email.trim() === "" || !email.includes("@") || !email.endsWith(".com")) ? "border-red-500" : ""
                    }`}
                  />
                  <textarea
                    placeholder="Enter your feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    style={{ height: '142px' }}
                    className={`w-full bg-[#19172c] border-[#292f46] border rounded-md px-4 py-2 focus:outline-none focus:border-[#4a89e8] ${
                      formError && feedback.trim() === "" ? "border-red-500" : ""
                    }`}
                  />
                  {!showSubmitMessage && (
                    <Button
                      color="primary"
                      onClick={handleSubmit}
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      Submit
                    </Button>
                  )}
                  {showSubmitMessage && (
                    <p className="text-green-500">Your feedback has been submitted!</p>
                  )}
                  {formError && (
                    <p className="text-red-500">
                      Please fill in all the required fields, ensure your email is valid (includes "@" and ends with ".com").
                    </p>
                  )}
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}