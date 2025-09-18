import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ArticleFeedback = () => {
    const [feedback, setFeedback] = useState(null); 

    const handleFeedback = (type) => {
        setFeedback(type);
        // Here you would typically send this feedback to an API
        console.log(`User marked article as: ${type}`);
    };

    return (
        <Card>
        <div className="p-4 bg-white  flex items-center space-x-4">
            <p className="text-gray-700 font-medium">Was this article helpful?</p>
            <div className="flex space-x-2">
                <button
                    onClick={() => handleFeedback('helpful')}
                    className={`p-2 rounded-md transition-colors duration-200 ${feedback === 'helpful' ? 'fill-blue-100 text-blue-700' : 'fill-gray-500 hover:bg-gray-100'
                        }`}
                    aria-label="Article was helpful"
                >
                    <ThumbsUp size={20} />
                </button>
                <button
                    onClick={() => handleFeedback('not_helpful')}
                    className={`p-2 rounded-md transition-colors duration-200 ${feedback === 'not_helpful' ? 'fill-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-100'
                        }`}
                    aria-label="Article was not helpful"
                >
                    <ThumbsDown size={20} />
                </button>
            </div>
        </div>
        </Card>
    );
};

export default ArticleFeedback;