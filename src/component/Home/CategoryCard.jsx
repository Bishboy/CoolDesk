import React from 'react'
import { categories } from '@/data';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router';
import { CATEGORY_URL } from '@/routes/constant/urlConstant';



const CategoryCard = () => {
    return (
        <div>
            <div className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                        Categories
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {categories.map((category, index) => (
                            <Card
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-200"
                            >

                                <div className="mb-4 border p-4 bg-gray-100 rounded-md">
                                    <category.icon className="h-10 w-10 text-indigo-600" />
                                </div>

                                <Link to={CATEGORY_URL}>
                                <CardContent className="p-0 flex-grow">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {category.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                                </CardContent>

                                <CardFooter className="p-0 mt-auto">
                                    <div className="flex items-center text-sm font-medium text-indigo-600">
                                        <span>{category.articles} articles</span>
                                    </div>
                                </CardFooter>
                            </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CategoryCard
