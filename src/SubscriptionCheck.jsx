// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// const SubscriptionCheck = ({ userEmail }) => {
//   const [userSubscription, setUserSubscription] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserSubscription = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/subscription/${userEmail}`);
//         console.log(response.data);
//         setUserSubscription(response.data);
//       } catch (error) {
//         console.error('Error fetching user subscription:', error);
//       }
//     };

//     fetchUserSubscription();
//   }, [userEmail]);

//   const handleCancelSubscription = async () => {
//     try {
//       // Send a DELETE request to delete the subscription
//       await axios.delete(`http://localhost:3000/subscription/${userEmail}`);
  
//       // Set userSubscription to null after successful cancellation
//       setUserSubscription(null);
//       navigate('/landing')
//     } catch (error) {
//       console.error('Error cancelling subscription:', error);
//     }
//   };

//   return (
//     <>
//       {userSubscription && userSubscription.subscription && userSubscription.subscription.status === 'Active' ? (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="bg-white dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-xl shadow-lg">
//             <h2 className="text-black dark:text-white text-2xl font-bold">
//               You have an active subscription
//             </h2>
//             <p className="text-gray-700 dark:text-gray-400 mt-4">
//               You are currently subscribed to the {userSubscription.subscription.plan} plan.
//             </p>
//             <button
//               className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
//               onClick={handleCancelSubscription}
//             >
//               Cancel Subscription
//             </button>
//           </div>
//         </div>
//       ) : null}
//     </>
//   );
// };

// export default SubscriptionCheck;










import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SubscriptionCheck = ({ userEmail }) => {
  const [userSubscription, setUserSubscription] = useState(null);
  const [cancelling, setCancelling] = useState(false);
  const [cancelled, setCancelled] = useState(false);


  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserSubscription = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/subscription/${userEmail}`);
        console.log(response.data);
        setUserSubscription(response.data);
      } catch (error) {
        console.error('Error fetching user subscription:', error);
      }
    };

    fetchUserSubscription();
  }, [userEmail]);

  const handleCancelSubscription = async () => {
    try {
        setCancelling(true);
        setCancelled(false);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for 2 seconds

      // Send a DELETE request to delete the subscription
      await axios.delete(`http://localhost:3000/subscription/${userEmail}`);
  
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for 2 seconds

      // Set userSubscription to null after successful cancellation
      setUserSubscription(null);
      setCancelling(false);
      //navigate('/landing')
    } catch (error) {
        console.error('Error cancelling subscription:', error);
        setCancelling(false); // Set cancelling state to false in case of error
        setCancelled(false); // Reset cancelled state in case of error
      }
  };

  return (
    <>
      {userSubscription && userSubscription.subscription && userSubscription.subscription.status === 'Active' ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-xl shadow-lg">
            <h2 className="text-black dark:text-white text-2xl font-bold">
              You have an active subscription
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mt-4">
              You are currently subscribed to the {userSubscription.subscription.plan} plan.
            </p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
              onClick={handleCancelSubscription}
              disabled={cancelling || cancelled}
            >
              {cancelling ? 'Cancelling...' : cancelled ? 'Cancelled' : 'Cancel Subscription'}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SubscriptionCheck;