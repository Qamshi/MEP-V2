import React, { useState } from 'react';
import { FaUserCircle, FaCommentAlt, FaLightbulb, FaBug } from 'react-icons/fa';

const FeedbackPage = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [type, setType] = useState('general');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission logic here
    console.log('Feedback submitted:', { email, feedback, type });
    // Reset form fields
    setEmail('');
    setFeedback('');
    setType('general');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Give us your Feedback</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-gray-300 border-2 rounded-md px-3 py-2 w-full"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="feedback" className="block font-medium mb-2">
              Feedback
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="border-gray-300 border-2 rounded-md px-3 py-2 w-full h-32 resize-none"
              placeholder="Enter your feedback"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block font-medium mb-2">
              Feedback Type
            </label>
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <input
                  type="radio"
                  id="general"
                  name="type"
                  value="general"
                  checked={type === 'general'}
                  onChange={(e) => setType(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="general" className="flex items-center">
                  <FaUserCircle className="mr-2" />
                  General
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  type="radio"
                  id="bug"
                  name="type"
                  value="bug"
                  checked={type === 'bug'}
                  onChange={(e) => setType(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="bug" className="flex items-center">
                  <FaBug className="mr-2" />
                  Bug
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="idea"
                  name="type"
                  value="idea"
                  checked={type === 'idea'}
                  onChange={(e) => setType(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="idea" className="flex items-center">
                  <FaLightbulb className="mr-2" />
                  Idea
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2 px-4 rounded-md w-full hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPage;