import Image from 'next/image'
import Link from 'next/link'
import BlogCard from './components/BlogCard'

const featuredPosts = [
  {
    title: 'Introduction to Next.js 14',
    description: 'Explore the latest features and improvements in Next.js 14, including server components and enhanced performance.',
    date: 'December 15, 2023',
    readTime: '5 min',
    slug: 'nextjs-14-introduction'
  },
  {
    title: 'Mastering TypeScript',
    description: 'A comprehensive guide to advanced TypeScript techniques and best practices for modern web development.',
    date: 'November 20, 2023',
    readTime: '7 min',
    slug: 'mastering-typescript'
  },
  {
    title: 'React Hooks Deep Dive',
    description: 'Uncover the power of React Hooks and learn how to write more efficient and readable functional components.',
    date: 'October 5, 2023',
    readTime: '6 min',
    slug: 'react-hooks-deep-dive'
  }
]

const technologies = [
  { name: 'Next.js', icon: '🚀' },
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Tailwind CSS', icon: '🎨' }
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900 py-16 lg:py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-primary-700 dark:text-primary-300">
              Modern Web Development Insights
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Dive into cutting-edge technologies, best practices, and innovative solutions for web developers.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="/blog" 
                className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Explore Blog
              </Link>
              <Link 
                href="/about" 
                className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 bg-primary-400/50 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <Image 
              src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Web Development" 
              width={600} 
              height={400} 
              className="relative z-10 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* Featured Technologies */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-primary-700 dark:text-primary-300">
          Technologies We Love
        </h2>
        <div className="flex justify-center space-x-8 lg:space-x-16">
          {technologies.map((tech) => (
            <div 
              key={tech.name} 
              className="text-center transform hover:scale-110 transition-transform"
            >
              <div className="text-5xl mb-4">{tech.icon}</div>
              <p className="text-gray-600 dark:text-gray-300">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="container mx-auto px-4 py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-primary-700 dark:text-primary-300">
          Featured Blog Posts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <BlogCard 
              key={post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
              readTime={post.readTime}
              slug={post.slug}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/blog" 
            className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </section>
    </div>
  )
}
