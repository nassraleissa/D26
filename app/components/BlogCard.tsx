import Image from 'next/image'
import Link from 'next/link'

const getUnsplashImage = (query: string) => {
  // Use Unsplash API directly for more reliable image fetching
  return `https://images.unsplash.com/photo-1615228402326-7adf9a257f2b?q=80&w=800&h=600&fit=crop&crop=entropy&auto=format&query=${encodeURIComponent(query)}`
}

interface BlogCardProps {
  title: string
  description: string
  date: string
  readTime: string
  slug: string
  imageUrl?: string
  tags?: string[]
}

export default function BlogCard({ 
  title, 
  description, 
  date, 
  readTime,
  slug,
  imageUrl = getUnsplashImage(title),
  tags = []
}: BlogCardProps) {
  // Generate a unique image based on the title
  // const imageUrl = getUnsplashImage(title)

  return (
    <Link href={`/blog/${slug}`} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="relative h-48 w-full">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 text-primary-700 dark:text-primary-300 group-hover:text-primary-600 transition-colors">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {description}
          </p>
          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
            <span>{date}</span>
            <span className="ml-4">{readTime} read</span>
          </div>
          {tags && tags.length > 0 && (
            <div className="mt-4 flex space-x-2">
              {tags.map(tag => (
                <span 
                  key={tag} 
                  className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
