// src/components/RelatedArticles.jsx
import React from 'react';
import { FileText } from 'lucide-react';
import { relatedArticles } from '../data.js'
import { Link } from 'react-router';
import { Card } from '@/components/ui/card.jsx';

const RelatedArticles = () => {
    return (
        <Card>
        <div className="bg-white p-6   mx-auto my-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {relatedArticles.map((article) => (
                    <Link
                        key={article.id}
                        href={article.link}
                        className="flex items-start space-x-3  border shadow group hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
                    >
                        <FileText size={20} className="text-gray-500 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors duration-200">
                                {article.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                                {article.excerpt}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        </Card>
    );
};

export default RelatedArticles;