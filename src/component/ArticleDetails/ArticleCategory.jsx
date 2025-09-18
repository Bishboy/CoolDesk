import React from 'react'

const PopularCategory = () => {
    const categories = [
        "Getting Started",
        "Product Guide",
        "Integrations",
        "Collaboration",
        "Billing & Subscription",
        "Developers & APIs",
        "Support & Troubleshooting",
        "Best Practices",
        "Resources"
    ];
  return (
    <div>
      <h1>Categories</h1>
        <ul>
            {categories.map((category, index) => (
                <li key={index}>{category}</li>
            ))}
        </ul>
    </div>
  )
}

export default PopularCategory