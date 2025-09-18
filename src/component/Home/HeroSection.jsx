import React, { useState } from "react";
 import InputComponent from "../InputComponent";


const HeroSection = () => {

    return (
        <>
            <div className="relative bg-[#5236CB] text-white ">
              
                <div className="relative py-12 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Our Knowledge Base</h1>

                        <div className="max-w-2xl mx-auto">
                            <div className="mb-6">
                                Find articles and resources to help with your questions.
                            </div>

                            <div className="">
                                <InputComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;