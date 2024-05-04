import React from 'react';

const PaymentCard = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-black lg:text-5xl sm:text-5xl">Pricing &amp; Plans</h2>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">Explore our range of flexible options designed to elevate your experience and empower your journey. Let us be your trusted partner in unlocking boundless possibilities.</p>
                </div>

                {/* Popular column */}
                <div className="mt-16 mx-auto text-center">
                    <table className="mx-auto">
                        <thead>
                            <tr>
                                <th className="py-8 pr-4"></th>

                                <th className="px-12 py-8 text-center bg-gray-900 rounded-t-xl">
                                    <a href="https://buy.stripe.com/test_00g3eWgJZaz5f9C9AA" target="_blank" rel="noopener noreferrer" className="block">
                                        <span className="px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700"> Popular </span>
                                        <p className="mt-6 text-6xl font-bold text-white">$100</p>
                                        <p className="mt-2 text-base font-normal text-gray-200">Per month</p>
                                    </a>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* You can add rows here if needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default PaymentCard;
