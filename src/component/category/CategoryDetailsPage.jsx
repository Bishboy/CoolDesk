import React from 'react'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import GettingStartedSection from './GettingStartedSection'
import ArticleCategory from '../ArticleDetails/ArticleCategory'
const CategoryDetailsPage = () => {
  return (
      <div className='bg-white'>
          <div className='container mx-auto text-black px-2'>
              <div className='py-4'>
                  <Breadcrumb>
                      <BreadcrumbList>
                          <BreadcrumbItem>
                              <BreadcrumbLink href="/" className={"hover:text-foreground transition-colors text-indigo-600"}>Home</BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbSeparator />
                          <BreadcrumbItem>
                              <BreadcrumbPage>Help Article Category</BreadcrumbPage>
                          </BreadcrumbItem>
                      </BreadcrumbList>
                  </Breadcrumb>
              </div>

              <div className='flex flex-col-reverse md:flex-row  md:mt-10 gap-[3rem] md:gap-6'>
                  {/* Sticky sidebar */}
                  <div className='md:w-[20%]'>
                      <div className='sticky top-4 md:h-[calc(100vh-2rem)]  overflow-y-auto'>
                          <ArticleCategory />
                      </div>
                  </div>

                  <div className='md:w-[80%]'>
                      <GettingStartedSection />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default CategoryDetailsPage
