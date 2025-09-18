import React from 'react';
import CategoryCard from './CategoryCard';
import PopularCard from './PopularCard';

const Articles = () => {
    return (
        <section className="py-12 md:py-20 bg-white px-2">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    Popular Articles
                </h2>
                <PopularCard />
            </div>
            <CategoryCard />

            <div className="py-16 md:py-20 bg-[#5236CB] text-white  rounded-lg mx-auto container px-4 my-12 md:my-20 shadow-lg">
                <div className="container mx-auto flex flex-col items-center  text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 max">
                        Transform Your Business with DevDesk
                    </h2>
                    <p className="text-lg md:text-xl text-indigo-100 mb-10 max-w-3xl leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sapien odio, luctus molestie vehicula non, ullamcorper sit amet ex. Donec mauris dolor, sodales ut vestibulum ut, facilisis a nibh.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button

                            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-200 shadow-md"
                        >
                            Free Trial
                        </button>
                        <button
                            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-200 shadow-md"
                        >
                            Request Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Articles;