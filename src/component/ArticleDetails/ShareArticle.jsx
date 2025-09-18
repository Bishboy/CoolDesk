// src/components/ShareArticle.jsx
import React from 'react';
import { Twitter, Facebook, Linkedin, Link } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ShareArticle = () => {
    const articleUrl = "https://yourwebsite.com/article-link"; // Replace with actual article URL
    const articleTitle = "Your Article Title Here"; // Replace with actual article title

    const shareLinks = [
        {
            name: 'Twitter',
            icon: <Twitter size={20} />,
            url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(articleTitle)}`,
        },
        {
            name: 'Facebook',
            icon: <Facebook size={20} />,
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`,
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin size={20} />,
            url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(articleUrl)}&title=${encodeURIComponent(articleTitle)}`,
        },
        {
            name: 'Copy Link',
            icon: <Link size={20} />,
            onClick: () => {
                navigator.clipboard.writeText(articleUrl);
                alert('Article link copied to clipboard!');
            },
        },
    ];

    return (
        <Card>
        <div className="flex justify-between bg-white items-center py-6 px-4">
            <p className="text-gray-700">Like what you see? Share this article.</p>
            <div className="flex space-x-2">
                {shareLinks.map((platform) => (
                    <button 
                        key={platform.name}
                        onClick={platform.onClick || (() => window.open(platform.url, '_blank'))}
                        className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                        aria-label={`Share on ${platform.name}`}
                    >
                        {platform.icon}
                    </button>
                ))}
            </div>
        </div>

        </Card>
    );
};

export default ShareArticle;