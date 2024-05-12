'use client';

// import { window } from 'browser';
import { useState } from 'react';
import styles from './pricing.module.css';
import { useTextareaContext } from './TextareaProvider'; // Use context
import axios from 'axios';
import { useNavigate } from "react-router-dom";



export const frequencies = [
  { id: '1', value: '1', label: 'Daily', priceSuffix: '/day' },
  { id: '2', value: '2', label: 'Weekly', priceSuffix: '/week' },
  { id: '3', value: '3', label: 'Monthly', priceSuffix: '/month' },
];

export const tiers = [
  {
    name: 'Daily Plan',
    id: '0',
    href: '#',
    price: { '1': '$25', '2': '$25' },
    discountPrice: { '1': '', '2': '' },
    description: `Unlock a day of unlimited possibilities with our One-Day Plan.`,
    features: [
      `Get 15 Ad's for a day of unlimited possibilities`,
      `Real-time notification system`,
      `Ad's Boosting and Optimization`,
    ],
    featured: false,
    highlighted: false,
    soldOut: false,
    cta: `Go Pro`,
  },
  {
    name: 'Weekly Plan',
    id: '1',
    href: '#',
    price: { '1': '$50', '2': '$50' },
    discountPrice: { '1': '', '2': '' },
    description: `Boost your business for the week ahead with our Weekly Plan.`,
    features: [
      `Get 30 Ad's for a day of unlimited possibilities`,
      `Customizable templates`,
      `Integration with third-party apps`,
    ],
    featured: false,
    highlighted: true,
    soldOut: false,
    cta: `Go Pro`,
  },
  {
    name: 'Monthly Plan',
    id: '2',
    href: '#',
    price: { '1': '$100', '2': '$100' },
    discountPrice: { '1': '', '2': '' },
    description: `Unleash a month of unstoppable growth, with tailored solutions to fuel your success journey.`,
    features: [
      `Get 50 Ad's for a day of unlimited possibilities`,
      `Priority support`,
      `Enterprise-grade security`,
    ],
    featured: true,
    highlighted: true,
    soldOut: false,
    cta: `Go Pro`,
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
const openNewTab = (url) => {
  window.open(url, '_blank');
};
const cn = (...args) => args.filter(Boolean).join(' ');

export default function PricingPage() {
  const [frequency, setFrequency] = useState(frequencies[0]);
  const navigate = useNavigate();
  const {
    userEmail,
    setSelectedPlan,
  } = useTextareaContext();

  const bannerText = '';

  return (
    <div
      className={cn('flex flex-col w-full items-center', styles.fancyOverlay)}
    >
      <div className="w-full flex flex-col items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
          <div className="w-full lg:w-auto mx-auto max-w-4xl lg:text-center">
            <h1 className="text-black dark:text-white text-4xl font-semibold max-w-xs sm:max-w-none md:text-6xl !leading-tight" style={{ marginLeft: '32px' }}>
            Subscription Plans
            </h1>
          </div>

          {bannerText ? (
            <div className="w-full lg:w-auto flex justify-center my-4">
              <p className="w-full px-4 py-3 text-xs bg-slate-100 text-black dark:bg-slate-300/30 dark:text-white/80 rounded-xl">
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
                        ? 'bg-slate-500/90 text-white dark:bg-slate-900/70 dark:text-white/70'
                        : 'bg-transparent text-gray-500 hover:bg-slate-500/10',
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

          <div
            className={cn(
              'isolate mx-auto mt-4 mb-28 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none select-none',
              tiers.length === 2 ? 'lg:grid-cols-2' : '',
              tiers.length === 3 ? 'lg:grid-cols-3' : '',
            )}
          >
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={cn(
                  tier.featured
                    ? '!bg-gray-900 ring-gray-900 dark:!bg-gray-100 dark:ring-gray-100'
                    : 'bg-white dark:bg-gray-900/80 ring-gray-300/70 dark:ring-gray-700',
                  'max-w-xs ring-1 rounded-3xl p-8 xl:p-10',
                  tier.highlighted ? styles.fancyGlassContrast : '',
                )}
              >
                <h3
                  id={tier.id}
                  className={cn(
                    tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                    'text-2xl font-bold tracking-tight',
                  )}
                >
                  {tier.name}
                </h3>
                <p
                  className={cn(
                    tier.featured
                      ? 'text-gray-300 dark:text-gray-500'
                      : 'text-gray-600 dark:text-gray-400',
                    'mt-4 text-sm leading-6',
                  )}
                >
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span
                    className={cn(
                      tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                      'text-4xl font-bold tracking-tight',
                      tier.discountPrice && tier.discountPrice[frequency.value]
                        ? 'line-through'
                        : '',
                    )}
                  >
                    {typeof tier.price === 'string'
                      ? tier.price
                      : tier.price[frequency.value]}
                  </span>

                  <span
                    className={cn(
                      tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                    )}
                  >
                    {typeof tier.discountPrice === 'string'
                      ? tier.discountPrice
                      : tier.discountPrice[frequency.value]}
                  </span>

                  {typeof tier.price !== 'string' ? (
                    <span
                      className={cn(
                        tier.featured
                          ? 'text-gray-300 dark:text-gray-500'
                          : 'dark:text-gray-400 text-gray-600',
                        'text-sm font-semibold leading-6',
                      )}
                    >
                      {frequency.priceSuffix}
                    </span>
                  ) : null}
                </p>
                <a

onClick={async (e) => {
  e.preventDefault();
  const currentTime = new Date();
  const startTime = currentTime.getTime(); // Get current time in milliseconds
  
  // Calculate end time based on the plan
  let endTime;
  let adsCount;
  let plan;
  if (tier.id === '0') {
    // For plan 0, end time is 24 hours after start time
    endTime = new Date(startTime + (24 * 60 * 60 * 1000));
    adsCount = 15;
    plan = '1';

    // Open the specified link in a new tab for tier 0
    window.open('https://buy.stripe.com/test_8wMeXEfFV22z1iMaEF', '_blank');
  } else if (tier.id === '1') {
    // For plan 1, end time is 7 days after start time
    endTime = new Date(startTime + (7 * 24 * 60 * 60 * 1000));
    adsCount = 30;
    plan = '2';
  } else if (tier.id === '2') {
    // For plan 2, end time is 30 days after start time
    endTime = new Date(startTime + (30 * 24 * 60 * 60 * 1000));
    adsCount = 50;
    plan = '3';
  }
  
  // Open the respective stripe checkout link and navigate to "/post" for all tiers
  const stripeCheckoutLink = tier.id === '1' ? 'https://buy.stripe.com/test_00g7vc2T922z0eI146' : 'https://buy.stripe.com/test_5kA6r851h0YvgdGcMP';
  openNewTab(stripeCheckoutLink);
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
}}





  
  aria-describedby={tier.id}
  className={cn(
    'flex mt-6 shadow-sm',
    tier.soldOut ? 'pointer-events-none' : '',
  )}
>
                  <button
                    disabled={tier.soldOut}
                    className={cn(
                      'w-full inline-flex items-center justify-center font-medium ring-offset-background hover:opacity-80 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-black dark:text-white h-12 rounded-md px-6 sm:px-10 text-md',
                      tier.featured || tier.soldOut ? 'grayscale' : '',
                      !tier.highlighted && !tier.featured
                        ? 'bg-gray-100 dark:bg-gray-600 border border-solid border-gray-300 dark:border-gray-800'
                        : 'bg-slate-300/70 text-slate-foreground hover:bg-slate-400/70 dark:bg-slate-700 dark:hover:bg-slate-800/90',
                      tier.featured ? '!bg-gray-100 dark:!bg-black' : '',
                    )}
                  >
                    {tier.soldOut ? 'Sold out' : tier.cta}
                  </button>
                </a>

                <ul
                  className={cn(
                    tier.featured
                      ? 'text-gray-300 dark:text-gray-500'
                      : 'text-gray-700 dark:text-gray-400',
                    'mt-8 space-y-3 text-sm leading-6 xl:mt-10',
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className={cn(
                          tier.featured ? 'text-white dark:text-black' : '',
                          tier.highlighted
                            ? 'text-slate-500'
                            : 'text-gray-500',

                          'h-6 w-5 flex-none',
                        )}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
