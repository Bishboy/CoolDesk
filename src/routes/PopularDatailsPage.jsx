import Header from '@/component/Header'
import React from 'react'
import PopularHero from '@/component/ArticleDetails/PopularHero'
import PopularArticleDetailsPage from '@/component/ArticleDetails/PopularArticleDetailsPage'
   

const PopularDatailsPage = () => {
  return (
      <div className="relative bg-[#5236CB]   text-white ">
        <Header />
        <PopularHero />
        <PopularArticleDetailsPage />
    </div>
  )
}

export default PopularDatailsPage