import React from 'react'
import BlogCard from '../components/BlogCard'
import { blogs } from '../config/constant'

const BlogPage = () => {
  return (
    <section className='mb-50 mt-30'>
        <BlogCard blogs={blogs}/>
    </section>
  )
}

export default BlogPage
