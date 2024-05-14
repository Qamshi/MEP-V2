import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SubscriptionCheck = ({ userEmail }) => {
    const [userSubscription, setUserSubscription] = useState(null);
    const [cancelling, setCancelling] = useState(false);
    const [cancelled, setCancelled] = useState(false);

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

            await axios.delete(`http://localhost:3000/subscription/${userEmail}`);

            await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for 2 seconds

            setUserSubscription(null);
            setCancelling(false);
        } catch (error) {
            console.error('Error cancelling subscription:', error);
            setCancelling(false); // Set cancelling state to false in case of error
            setCancelled(false); // Reset cancelled state in case of error
        }
    };

    const getPlanName = (planValue) => {
        switch (planValue) {
            case '1':
                return 'Daily Plan';
            case '2':
                return 'Weekly Plan';
            case '3':
                return 'Monthly Plan';
            default:
                return userSubscription.subscription.plan;
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
                        <p className="mt-4" style={{ color: '#4a5568'}}>
                            You are currently subscribed to the <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>"{getPlanName(userSubscription.subscription.plan)}"</span>.
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