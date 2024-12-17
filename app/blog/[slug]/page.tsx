import { notFound } from 'next/navigation'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github.css'
import { blogPosts } from '../../lib/blogPosts'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const dynamic = 'force-static'
export const dynamicParams = true

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.imageUrl }]
    }
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-primary-700 dark:text-primary-300">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
          <span className="mr-4">{post.date}</span>
          <span>{post.readTime} read</span>
          <div className="ml-4 flex space-x-2">
            {post.tags.map(tag => (
              <span key={tag} className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="relative h-96 w-full mb-8 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      
      <div className="prose dark:prose-invert max-w-none prose-lg">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
          components={{
            code({ node, className, children, ...props }) {
              const isInline = !className?.includes('language-')
              return isInline ? (
                <code 
                  className={`${className} bg-gray-100 dark:bg-gray-800 px-1 rounded`} 
                  {...props}
                >
                  {children}
                </code>
              ) : (
                <code 
                  className={`${className} rounded-md p-2 bg-gray-100 dark:bg-gray-800`} 
                  {...props}
                >
                  {children}
                </code>
              )
            }
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  )
}
