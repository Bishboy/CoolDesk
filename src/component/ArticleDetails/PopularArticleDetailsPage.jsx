import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import ArticleCategory from './ArticleCategory'
import DetailsCardPage from './DetailsCardPage'

const PopularArticleDetailsPage = () => {
    return (
        <div className='bg-white p'>
            <div className='container mx-auto text-black px-2'>
                <div className='py-4 px-2'>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className={"hover:text-foreground transition-colors text-indigo-600"}>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Popular Article</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className='flex flex-col-reverse md:flex-row md:mt-10 gap-6'>
                    <div className='md:w-[20%]'>
                        <div className='sticky top-4 md:h-[calc(100vh-2rem)] h-[30rem]  overflow-y-auto'>
                            <ArticleCategory />
                        </div>
                    </div>
 
                    <div className='md:w-[80%]'>
                        <DetailsCardPage />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularArticleDetailsPage