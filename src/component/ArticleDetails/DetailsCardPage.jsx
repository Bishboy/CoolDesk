import React from 'react'
import AurthorProfile from "../../assets/images/help/author-profile.png"
import featuredIMG from "../../assets/images/features/feature-figure-components.png"
import { steps } from '@/data'
import ArticleFeedback from '../ArticleFeedback'
import ShareArticle from './ShareArticle'
import RelatedArticles from '../RelatedArticles'

const DetailsCardPage = () => {
    return (
        <div>
            <div className='px-2'>
                <div className='space-y-6'>
                    <h1 className='text-center text-5xl font-bold'>Help Article Lorem Ipsum Dolor</h1>
                    <div className='flex items-center lg:mt-12 justify-center gap-2'>
                        <img src={AurthorProfile} alt="AurthorProfile" className='w-8 h-8' />
                        <h1 className='flex flex-col'>
                            Written By: Momentum Team
                            <span>Last updated: 24th June</span>
                        </h1>
                    </div>
                    <div className='text-gray-600 flex flex-col gap-[2rem]'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales, ligula non congue placerat, felis nibh dapibus risus, id sollicitudin quam libero ac libero. Ut massa massa, varius vitae volutpat in, sodales et mi. Mauris sed tempor turpis. Nullam sodales dapibus lacus non tempor link example. Integer aliquet quam sed ipsum imperdiet vehicula.</p>

                        <p className='p-6 bg-indigo-100 rounded-2xl text-gray-600'><span className='font-bold'>This is an info callout.</span>   Example text to show it in action. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, sem sit amet tempus interdum, ex ex egestas dui, at aliquam urna metus eu lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span className='font-bold'> Aenean mollis,</span>  sem sit amet tempus interdum, ex ex egestas dui, at aliquam urna metus eu lectus.</p>

                        <div>
                            <span className='font-bold text-2xl block mb-5'>1. Sub Heading Lorem Ipsum</span>
                            <p>
                                Vestibulum id ex ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vel leo augue. Integer non mauris consectetur, euismod orci sed, porttitor odio. Phasellus eu euismod nulla. Curabitur fermentum ullamcorper mattis. Phasellus luctus accumsan turpis vitae placerat. Cras volutpat commodo velit, nec commodo leo suscipit dapibus.
                            </p>
                            <img src={featuredIMG} alt="" className='mt-5' />
                            <p>Aenean in metus dictum, vehicula ipsum quis, maximus enim. Integer maximus est eget risus ornare, quis imperdiet leo porttitor. Integer sagittis nibh eu magna ornare aliquam. Morbi sit amet mauris at felis convallis mattis.</p>
                        </div>

                        <span className='font-bold text-2xl block mb-5'>How To Install Lorem Ipsum</span>
                        <p>
                            Vestibulum id ex ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vel leo augue. Integer non mauris consectetur, euismod orci sed, porttitor odio. Phasellus eu euismod nulla. Curabitur fermentum ullamcorper mattis. Phasellus luctus accumsan turpis vitae placerat. Cras volutpat commodo velit, nec commodo leo suscipit dapibus.
                        </p>

                        <span className='font-bold text-2xl block mb-5'>How To Integrate Lorem Ipsum</span>
                        <p>
                            Vestibulum id ex ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vel leo augue. Integer non mauris consectetur, euismod orci sed, porttitor odio. Phasellus eu euismod nulla. Curabitur fermentum ullamcorper mattis. Phasellus luctus accumsan turpis vitae placerat. Cras volutpat commodo velit, nec commodo leo suscipit dapibus.
                        </p>

                        <div>
                            <span className='font-bold text-2xl block mb-5'>2. Sub Heading Lorem Ipsum</span>
                            <p>
                                Vestibulum id ex ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vel leo augue. Integer non mauris consectetur, euismod orci sed, porttitor odio. Phasellus eu euismod nulla. Curabitur fermentum ullamcorper mattis. Phasellus luctus accumsan turpis vitae placerat. Cras volutpat commodo velit, nec commodo leo suscipit dapibus.
                            </p>
                            <div className="p-8">
                                <h2 className="text-xl font-bold mb-6">Custom Ordered List Example:</h2>
                                <div className="space-y-6">
                                    {steps.map((step, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-white bg-indigo-600 rounded-full">
                                                {step.numb}
                                            </div>
                                            <div className="flex-grow">
                                                <h3 className="font-bold text-gray-900">{step.title}</h3>
                                                <p className="mt-1 text-gray-600">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Responsive YouTube Embed */}
                            <div className='relative w-full h-0 pb-[56.25%] my-8'> {/* 16:9 aspect ratio */}
                                <iframe
                                    className='absolute top-0 left-0 w-full h-full rounded-lg'
                                    src="https://www.youtube.com/embed/3iUHQ8-1u5s?si=qXlm6fDzSKkt9GIZ"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        <div className='space-y-6 py-2'>
                            <span className='font-bold text-2xl block mb-5'>1. Components Examples</span>
                            <p>
                                Below are examples of useful design components you can use in your help articles. Vestibulum id ex ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vel leo augue. Integer non mauris consectetur, euismod orci sed, porttitor odio. Phasellus eu euismod nulla.
                            </p>

                            <h1 className='text-2xl font-bold'>Help Article Callouts:</h1>
                            <p className='p-6 bg-indigo-100 rounded-2xl text-gray-600'><span className='font-bold '>This is an info callout.</span>  Example text to show it in action. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, sem sit amet tempus interdum, ex ex egestas dui, at aliquam urna metus eu lectus.</p>
                            <p className='p-6 bg-green-100 rounded-2xl text-gray-600'><span className='font-bold '>This is an info callout.</span>  Example text to show it in action. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, sem sit amet tempus interdum, ex ex egestas dui, at aliquam urna metus eu lectus.</p>
                            <p className='p-6 bg-yellow-100 rounded-2xl text-gray-600'><span className='font-bold '>This is a warning callout.</span>   Example text to show it in action. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, sem sit amet tempus interdum, ex ex egestas dui, at aliquam urna metus eu lectus.</p>
                            <p className='p-6 bg-red-100 rounded-2xl text-gray-600'><span className='font-bold '>This is a warning callout.</span>   Example text to show it in action. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, sem sit amet tempus interdum, ex ex egestas dui, at aliquam urna metus eu lectus.</p>
                        </div>

                        <div className='flex flex-col gap-8'>
                            <ArticleFeedback />
                            <ShareArticle />
                        </div>

                        <RelatedArticles />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsCardPage