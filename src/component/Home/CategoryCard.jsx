import React from 'react'
import { categories } from '@/data';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router';
import { CATEGORY_URL } from '@/routes/constant/urlConstant';

const CategoryCard = () => {
    return (
        <div>
            <div className="py-12 md:py-20">
                <div className="max-w-[1400px] mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                        Categories
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {categories.map((category, index) => (
                            <Card
                                key={index}
                                className="card-wavy bg-white border border-gray-200 rounded-xl py-12 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-200 group"
                            >

                                <div className="mb-4  p-4 bg-gray-50 rounded-md">
                                    <img src={category.icon} alt="" className="h-12 w-12 text-indigo-600" />
                                    {/* <category.icon className="h-10 w-10 text-indigo-600" /> */}
                                </div>

                                <Link to={CATEGORY_URL}>
                                    <CardContent className="p-0 flex-grow">
                                        <h3 className="text-xl font-semibold group-hover:text-indigo-600 text-gray-800 mb-2">
                                            {category.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                                    </CardContent>

                                    <CardFooter className="p-0 mt-auto flex items-center justify-center">
                                        <div className="flex items-center text-sm font-medium text-indigo-600">
                                            <span className=''>{category.articles} articles</span>
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