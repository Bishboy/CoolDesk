import PopularHero from '@/component/ArticleDetails/PopularHero'
import CategoryDetailsPage from '@/component/category/CategoryDetailsPage'
import Header from '@/component/Header'
import React from 'react'


const CategoryDetails = () => {
  return (
      <div className="relative bg-[#5236CB]   text-white ">
          <Header />
          <PopularHero />
          <CategoryDetailsPage />
    </div>
  )
}

export default CategoryDetails
