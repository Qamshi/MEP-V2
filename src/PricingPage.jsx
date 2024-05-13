'use client';
import { useState } from 'react';
import styles from './pricing.module.css';
import { useTextareaContext } from './TextareaProvider'; // Use context
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const frequencies = [
  { id: '1', value: '1', label: 'Daily ', priceSuffix: '/daily' },
  { id: '2', value: '2', label: 'Weekly', priceSuffix: '/weekly' },
  { id: '3', value: '3', label: 'Monthly', priceSuffix: '/monthly' },
];

export const tiers = [
  {
    name: 'Subscription Plans',
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
                className="grid gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 bg-white dark:bg-black ring-1 ring-inset ring-gray-200/30 dark:ring-gray-800"
                style={{
                  gridTemplateColumns: `repeat(${frequencies.length}, minmax(0, 1fr))`,
                }}
              >
                <p className="sr-only">Payment frequency</p>
                {frequencies.map((option) => (
                  <label
                    className={cn(
                      frequency.value === option.value
                        ? 'bg-gray-500/90 text-white dark:bg-gray-900/70 dark:text-white/70'
                        : 'bg-transparent text-gray-500 hover:bg-gray-500/10',
                      'cursor-pointer rounded-full px-2.5 py-2 transition-all',
                    )}
                    key={option.value}
                    htmlFor={option.value}
                  >
                    {option.label}

                    <button
                      value={option.value}
                      id={option.value}
                      className="hidden"
                      role="radio"
                      aria-checked={frequency.value === option.value}
                      onClick={() => {
                        setFrequency(
                          frequencies.find(
                            (f) => f.value === option.value,
                          ),
                        );
                      }}
                    >
                      {option.label}
                    </button>
                  </label>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-12" aria-hidden="true"></div>
          )}

          <div className="flex flex-wrap xl:flex-nowrap items-center bg-white dark:bg-gray-900/80 backdrop-blur-md mx-auto mt-4 max-w-2xl rounded-3xl ring-1 ring-gray-300/70 dark:ring-gray-700 xl:mx-0 xl:flex xl:max-w-none">
            <div className="p-8 sm:p-10 xl:flex-auto">
              <h3 className="text-black dark:text-white text-2xl font-bold tracking-tight">{tier.name}</h3>
              <p className="mt-6 text-base leading-7 text-gray-700 dark:text-gray-400">
                {tier.description}
              </p>
              <div className="mt-12 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-black dark:text-white">
                  Included features
                </h4>
                <div className="h-px flex-auto bg-gray-100 dark:bg-gray-700" />
              </div>

              <ul className="mt-10 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-700 dark:text-gray-400">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-x-2 text-sm"
                  >
                    <CheckIcon
                      className="h-6 w-6 flex-none text-gray-500"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 xl:pr-8 xl:mt-0 w-full xl:max-w-md xl:flex-shrink-0">
              <div
                className={cn(
                  'rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-300/50 dark:ring-gray-800/50 xl:flex xl:flex-col xl:justify-center xl:py-16',
                  styles.fancyGlass,
                )}
              >
                <div className="mx-auto max-w-xs px-8">
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span
                      className={cn(
                        'text-black dark:text-white text-5xl font-bold tracking-tight',
                        tier.discountPrice &&
                          tier.discountPrice[
                            frequency.value
                          ]
                          ? 'line-through'
                          : '',
                      )}
                    >
                      {typeof tier.price === 'string'
                        ? tier.price
                        : tier.price[frequency.value]}
                    </span>

                    <span className="text-black dark:text-white">
                      {typeof tier.discountPrice === 'string'
                        ? tier.discountPrice
                        : tier.discountPrice[frequency.value]}
                    </span>

                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-700 dark:text-gray-400">
                      {frequency.priceSuffix}
                    </span>
                  </p>
                  <a
                    // href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center mt-8 flex-shrink-0"
                    onClick={handleClick}
                  >
                    <button className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-300/70 text-gray-foreground hover:bg-gray-300/90 dark:bg-gray-700 dark:hover:bg-gray-700/90 text-black dark:text-white h-12 rounded-md px-6 sm:px-10 text-md">
                      {tier.cta}
                    </button>
                  </a>
                  <p className="mt-2 text-xs leading-5 text-gray-700 dark:text-gray-400">
                    Sign up in seconds, no credit card required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
