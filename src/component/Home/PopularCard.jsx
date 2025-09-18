import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { articles } from '@/data'
import { POPULAR_ARTICLES_URL } from '@/routes/constant/urlConstant'
import { FileText, ThumbsUp } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

 

const PopularCard = () => {
  return (
    <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {articles.map((article) => (
                
                  <Card
                      key={article.id}
                      className="bg-white border border-gray-200 rounded-xl py- p-8 flex flex-col items-start shadow-xl hover:shadow-2xl transition-all duration-200 group"
                  >
                    <Link to={POPULAR_ARTICLES_URL}>
                    <CardHeader className="p-0 mb-4">
                          <div className="p-2 bg-gray-50 w-fit rounded-md">
                              <FileText className="h-5 w-5 text-gray-600" />
                          </div>
                      </CardHeader> 
                      
                      <CardContent className="p-0 flex-grow">
                          <div  className="text-base font-semibold group-hover:text-indigo-600 text-gray-800 mb-3 leading-tight">
                              {article.title}
                          </div>
                      </CardContent>
                      <CardFooter className="p-0 mt-6">
                          <div className="flex items-center text-sm text-gray-500">
                              <ThumbsUp className="h-4 w-4 mr-1 fill-gray-500" />
                              <span>
                                  {article.helpfulCount} people found this article helpful
                              </span>
                          </div>
                      </CardFooter>
                    
                    </Link>
                  </Card>
              ))}
          </div>
    </div>
  )
}

export default PopularCard