'use client';
import { useState, useEffect } from 'react';
import styles from './pricing.module.css';
import { useTextareaContext } from './TextareaProvider'; // Use context
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import SubscriptionCheck from './SubscriptionCheck'; // Import the new component


export const frequencies = [
  { id: '1', value: '1', label: 'Daily ', priceSuffix: '/daily' },
  { id: '2', value: '2', label: 'Weekly', priceSuffix: '/weekly' },
  { id: '3', value: '3', label: 'Monthly', priceSuffix: '/monthly' },
];

export const tiers = [
  {
    name: 'Subscription Plan',
    id: '0',
    // href: '/subscribe',
    price: { '1': '$25', '2': '$50', '3': '$100' },
    discountPrice: { '1': '', '2': '', '3': '' },
    description: `Get all goodies for free, no credit card required.`,
    features: [
      `Multi-platform compatibility`,
      `Real-time notification system`,
      `Advanced user permissions`,
    ],
    featured: false,
    highlighted: false,
    soldOut: false,
    cta: `Subscribe`,
  },
];

const CheckIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('w-6 h-6', className)}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const cn = (...args) => args.filter(Boolean).join(' ');

export default function PricingPage() {
  const [frequency, setFrequency] = useState(frequencies[0]);
  const [userSubscription, setUserSubscription] = useState(null);

  const navigate = useNavigate();
  const {
    userEmail,
    setSelectedPlan,
  } = useTextareaContext();


  const tier = tiers[0];
  const bannerText = "";

  const handleClick = async () => {
    const currentTime = new Date();
    const startTime = currentTime.getTime(); // Get current time in milliseconds
  
    // Calculate end time based on the plan
    let endTime;
    let adsCount;
    let plan;
    if (frequency.value === '1') {
      // For plan 0, end time is 24 hours after start time
      endTime = new Date(startTime + (24 * 60 * 60 * 1000));
      adsCount = 15;
      plan = '1';
  
      // Open the specified link in a new tab for tier 0
      window.open('https://buy.stripe.com/test_8wMeXEfFV22z1iMaEF', '_blank');
    } else if (frequency.value === '2') {
      // For plan 1, end time is 7 days after start time
      endTime = new Date(startTime + (7 * 24 * 60 * 60 * 1000));
      adsCount = 30;
      plan = '2';
      window.open('https://buy.stripe.com/test_00g7vc2T922z0eI146', '_blank');
    } else if (frequency.value === '3') {
      // For plan 2, end time is 30 days after start time
      endTime = new Date(startTime + (30 * 24 * 60 * 60 * 1000));
      adsCount = 50;
      plan = '3';
      window.open('https://buy.stripe.com/test_5kA6r851h0YvgdGcMP', '_blank');
    }
  
    // Navigate to "/plan" for all tiers
    navigate("/plan");
  
    setSelectedPlan(plan);
    const postData = {
      userEmail,
      status: 'Active',
      ads_count: adsCount,
      plan: plan,
      start_time: startTime,
      end_time: endTime.getTime(), // Convert end time to milliseconds
    };
  
    try {
      const userDataResponse = await axios.post("http://localhost:3000/subscription", postData);
      console.log("Data saved:", userDataResponse); // Success log
    } catch (error) {
      console.error("Error saving data:", error); // Error log
    }
  };


  return (
    <>
      <SubscriptionCheck userEmail={userEmail} />
        <div
          className={cn('flex flex-col w-full items-center', styles.fancyOverlay)}
        >
          <div className="w-full flex flex-col items-center mb-24">
            <div className="mx-auto max-w-7xl px-6 xl:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h1 className="text-black dark:text-white text-4xl font-semibold max-w-xs sm:max-w-none md:text-6xl !leading-tight">
                  Pricing
                </h1>
              </div>
  
              {bannerText ? (
                <div className="flex justify-center my-4">
                  <p className="px-4 py-3 text-xs bg-gray-100 text-black dark:bg-gray-300/30 dark:text-white/80 rounded-xl">
                    {bannerText}
                  </p>
                </div>
              ) : null}
  
              {frequencies.length > 1 ? (
                <div className="mt-16 flex justify-center">
                  <div
                    role="radiogroup"
                    aria-label="Subscription frequency"
                    className="flex space-x-4"
                  >
                    {frequencies.map((f) => (
                      <button
                        key={f.id}
                        className={cn(
                          'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                          frequency.value === f.value
                            ? 'bg-gray-900 text-white hover:bg-gray-800'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                        )}
                        onClick={() => setFrequency(f)}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
  
              <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                {tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={cn(
                      'rounded-3xl px-6 pt-8 pb-8 shadow-lg ring-1 ring-gray-900/5',
                      tier.featured
                        ? 'bg-gray-900 text-white ring-gray-900/5'
                        : 'bg-white text-gray-900 ring-gray-900/5 dark:bg-gray-900 dark:text-white dark:ring-gray-100/5'
                    )}
                  >
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <h3
                          id={`tier-${tier.id}`}
                          className={cn(
                            'text-2xl font-bold',
                            tier.featured
                              ? 'text-white'
                              : 'text-gray-900 dark:text-white'
                          )}
                        >
                          {tier.name}
                        </h3>
                        <p
                          className={cn(
                            'mt-4 text-4xl font-bold tracking-tight',
                            tier.featured
                              ? 'text-white'
                              : 'text-gray-900 dark:text-white'
                          )}
                        >
                          {tier.price[frequency.value]}
                          <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                            {tier.priceSuffix}
                          </span>
                        </p>
                        <p
                          className={cn(
                            'mt-4',
                            tier.featured
                              ? 'text-gray-300'
                              : 'text-gray-600 dark:text-gray-400'
                          )}
                        >
                          {tier.description}
                        </p>
                        <ul
                          role="list"
                          className={cn(
                            'mt-8 space-y-3',
                            tier.featured
                              ? 'text-gray-300'
                              : 'text-gray-600 dark:text-gray-400'
                          )}
                        >
                          {tier.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <CheckIcon
                                className={cn(
                                  tier.featured ? 'text-gray-300' : 'text-gray-500'
                                )}
                              />
                              <span className="ml-3">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-8">
                        <a
                        style={{cursor: 'pointer'}}
                          href={tier.href}
                          aria-describedby={`tier-${tier.id}`}
                          className={cn(
                            'block rounded-md py-2 px-3 text-center text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2',
                            tier.featured
                              ? 'bg-white text-gray-900 hover:bg-gray-100'
                              : 'bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
                          )}
                          onClick={handleClick}
                        >
                          {tier.cta}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </>
  );
}



