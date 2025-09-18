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
                      className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-start shadow-xl hover:shadow-2xl transition-all duration-200"
                  >
                    <CardHeader className="p-0 mb-4">
                          <div className="p-2 bg-gray-100 rounded-md">
                              <FileText className="h-6 w-6 text-gray-600" />
                          </div>
                      </CardHeader> 
                      <CardContent className="p-0 flex-grow">
                          <Link to={POPULAR_ARTICLES_URL} className="text-lg font-semibold text-gray-800 mb-3 leading-tight">
                              {article.title}
                          </Link>
                      </CardContent>
                      <CardFooter className="p-0 mt-auto">
                          <div className="flex items-center text-sm text-gray-500">
                              <ThumbsUp className="h-4 w-4 mr-1 text-gray-400" />
                              <span>
                                  {article.helpfulCount} people found this article helpful
                              </span>
                          </div>
                      </CardFooter>
                  </Card>
              ))}
          </div>
    </div>
  )
}

export default PopularCard