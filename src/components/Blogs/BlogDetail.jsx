import React from 'react'
import CommentSection from './CommentSection'
import AuthorInfo from './AuthorInfo'
import NextPrevPostSlider from './NextPrevPostSlider/NextPrevPostSlider'
import MainPost from './MainPost'
import BannerRe from '../Ads/BannerRe'
import BlogView from './BlogView/BlogView'

const BlogDetail = () => {
  return (
    <div>
      <BlogView />
      <BannerRe />
      <MainPost />
      <NextPrevPostSlider />
      <AuthorInfo />
      <CommentSection />
    </div>
  )
}

export default BlogDetail
