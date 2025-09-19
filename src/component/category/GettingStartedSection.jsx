// src/components/GettingStartedSection.jsx
import React from 'react';
import { FileText } from 'lucide-react';
import { gettingStartedArticles } from '@/data';
import { Link } from 'react-router';

const GettingStartedSection = () => {
    return (
        <div className="max-w-3xl mx-auto mt-8 md:mt-0 px-4">
            {/* Heading */}
            <h1 className="text-3xl font-bold text-gray-900 text-center md:text-start mb-4">Getting Started</h1>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-8 text-center md:text-start">
                In this section, we'll guide you through the initial steps to set up your Momentum account.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* List of Articles */}
            <div className="space-y-4">
                {gettingStartedArticles.map((article) => (
                    <Link to={article.link}
                        key={article.id}
                        className="flex items-center space-x-3 p-3 -mx-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                    >
                        <FileText size={20} className="text-gray-500 flex-shrink-0 group-hover:text-blue-600" />
                        <span className="text-gray-800 font-medium group-hover:text-blue-700 transition-colors duration-200">
                            {article.title}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default GettingStartedSection;