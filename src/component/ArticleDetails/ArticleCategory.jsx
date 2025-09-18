import { CATEGORY_URL } from '@/routes/constant/urlConstant';
import React, { useState } from 'react';
import { Link } from 'react-router';

const ArticleCategory = () => {
  const [activeCategory, setActiveCategory] = useState(1); 

  const categories = [
    {
      id: 1,
      name: "Getting Started",
      url:  CATEGORY_URL
    },
    {
      id: 2,
      name: "Product Guide",
      url: CATEGORY_URL
    },
    {
      id: 3,
      name: "Integrations",
      url: CATEGORY_URL
    },
    {
      id: 4,
      name: "Collaboration",
      url: CATEGORY_URL
    },
    {
      id: 5,
      name: "Billing & Subscription",
      url: CATEGORY_URL
    },
    {
      id: 6,
      name: "Developers & APIs",
      url: CATEGORY_URL
    },
    {
      id: 7,
      name: "Support & Troubleshooting",
      url: CATEGORY_URL
    },
    {
      id: 8,
      name: "Best Practices",
      url: CATEGORY_URL
    },
    {
      id: 9,
      name: "Resources",
      url: "/category/resources"
    }
  ];

  return (
    <div className='px-4 md:px-0'>
      <h1 className='font-bold text-2xl md:mb-8 mb-4'>Categories</h1>
      <ul className='flex flex-col md:space-y-6 space-y-3' >
        {categories.map((category) => (
          <li
            key={category.id}
            // className={`pl-4 py-1 transition-all duration-200 ${activeCategory === category.id
            //     ? 'border-l-2 border-blue-500 text-blue-600 font-medium'
            //     : 'border-l-2 border-transparent'
            //   }`}
          >
            <Link
              to={category.url}
              onClick={() => setActiveCategory(category.id)}
              className="text-left w-full hover:text-blue-600 transition-colors duration-200"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleCategory;