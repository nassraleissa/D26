'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const Header = () => {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link 
          href="/" 
          className="text-2xl font-bold text-primary-700 dark:text-primary-300 hover:text-primary-600 transition-colors"
        >
          ModernBlog
        </Link>
        
        <nav className="flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                text-gray-600 dark:text-gray-300 
                hover:text-primary-600 dark:hover:text-primary-400 
                transition-colors
                ${pathname === item.href 
                  ? 'font-semibold text-primary-700 dark:text-primary-300' 
                  : ''
                }
              `}
            >
              {item.label}
            </Link>
          ))}
          
          <button 
            onClick={toggleTheme} 
            className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && (
              theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
