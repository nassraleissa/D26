import Link from 'next/link'
import Image from 'next/image'
import BlogCard from '../components/BlogCard'
import { blogPosts } from '../lib/blogPosts'

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-primary-700 dark:text-primary-300">
        Our Blog
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(blogPosts).map(([slug, post]) => (
          <BlogCard 
            key={slug}
            title={post.title}
            description={post.description}
            date={post.date}
            readTime={post.readTime}
            slug={slug}
            imageUrl={post.imageUrl}
            tags={post.tags}
          />
        ))}
      </div>
    </div>
  )
}
