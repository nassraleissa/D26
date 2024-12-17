const getUnsplashImage = (query: string) => {
  return `https://images.unsplash.com/photo-1615228402326-7adf9a257f2b?q=80&w=1200&h=800&fit=crop&crop=entropy&auto=format&query=${encodeURIComponent(query)}`
}

export const blogPosts = {
  'nextjs-14-introduction': {
    title: 'Introduction to Next.js 14',
    description: 'Explore the powerful new features and improvements in Next.js 14, revolutionizing web development with enhanced performance and developer experience.',
    content: `
## Revolutionizing Web Development with Next.js 14

Next.js 14 marks a significant milestone in modern web development, bringing unprecedented capabilities to React developers. This release introduces game-changing features that streamline the development process and enhance application performance.

### Key Innovations

1. **Server Components**
   - Improved rendering performance
   - Reduced client-side JavaScript
   - Enhanced initial page load speed

2. **Improved Routing**
   - More intuitive navigation system
   - Simplified route management
   - Better performance with server-side routing

3. **Enhanced Image Optimization**
   - Automatic image compression
   - Lazy loading out of the box
   - Responsive image handling

### Performance Breakthrough

Next.js 14 isn't just an update; it's a performance revolution. By leveraging server-side rendering and intelligent component loading, applications become faster, more efficient, and provide a smoother user experience.

### Developer Experience

Developers will appreciate the refined developer tools, improved TypeScript integration, and more predictable rendering patterns. The framework continues to abstract complexity while providing granular control when needed.

#### Code Example: Server Component

\`\`\`typescript
export default async function ServerComponent() {
  const data = await fetchData()
  return <div>{data.content}</div>
}
\`\`\`

### Conclusion

Next.js 14 represents the future of web development – faster, more efficient, and developer-friendly.
    `,
    date: 'December 15, 2023',
    readTime: '5 min',
    tags: ['Next.js', 'Web Development', 'React'],
    imageUrl: getUnsplashImage('Next.js 14 Introduction')
  },
  'mastering-typescript': {
    title: 'Mastering TypeScript',
    description: 'Deep dive into TypeScript, exploring advanced type techniques, best practices, and how to leverage its powerful type system for robust web applications.',
    content: `
## Mastering TypeScript: Beyond the Basics

TypeScript has transformed from a compile-time type checker to a comprehensive development ecosystem that empowers developers to write more robust and maintainable code.

### Why TypeScript?

- **Type Safety**: Catch errors before runtime
- **Enhanced Tooling**: Superior IDE support
- **Modern JavaScript**: Use future language features today

### Advanced Type Techniques

#### Generics
Generics allow you to create reusable components that work with multiple types:

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg
}

let output = identity<string>("Hello TypeScript")
\`\`\`

#### Conditional Types
Create complex type transformations:

\`\`\`typescript
type IsString<T> = T extends string ? true : false
type Result = IsString<"hello">  // true
type Result2 = IsString<number>  // false
\`\`\`

### Best Practices

1. Use strict mode
2. Leverage type inference
3. Create type guards
4. Use interfaces for object shapes

### Tooling Ecosystem

- Visual Studio Code
- ESLint with TypeScript plugin
- Automated refactoring
- Comprehensive type checking

### Conclusion

TypeScript is not just a type system; it's a developer productivity tool that makes JavaScript more powerful and reliable.
    `,
    date: 'November 20, 2023',
    readTime: '7 min',
    tags: ['TypeScript', 'Programming', 'Web Development'],
    imageUrl: getUnsplashImage('Mastering TypeScript')
  },
  'react-hooks-deep-dive': {
    title: 'React Hooks Deep Dive',
    description: 'Comprehensive exploration of React Hooks, uncovering advanced techniques, performance optimization, and best practices for modern React development.',
    content: `
## React Hooks: Revolutionizing Functional Components

React Hooks transformed functional components from stateless to powerful, feature-rich building blocks of modern web applications.

### Essential Hooks

1. **useState**: State management in functional components
2. **useEffect**: Side effect handling
3. **useContext**: Simplified state and context management
4. **useCallback**: Performance optimization
5. **useMemo**: Memoization and expensive computation caching

### Custom Hooks: Code Reusability

Create your own hooks to encapsulate and share stateful logic:

\`\`\`typescript
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)
  
  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  
  return { count, increment, decrement }
}
\`\`\`

### Performance Optimization Techniques

- Minimize unnecessary re-renders
- Use \`useMemo\` and \`useCallback\`
- Implement proper dependency arrays

### Advanced Patterns

#### Compound Components
Create flexible, composable components:

\`\`\`typescript
function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div>
      {React.Children.map(children, (child, index) => 
        React.cloneElement(child, { 
          isActive: index === activeTab,
          onActivate: () => setActiveTab(index)
        })
      )}
    </div>
  )
}
\`\`\`

### Conclusion

React Hooks have fundamentally changed how we write React applications, promoting cleaner, more modular, and more maintainable code.
    `,
    date: 'October 5, 2023',
    readTime: '6 min',
    tags: ['React', 'Hooks', 'Web Development'],
    imageUrl: getUnsplashImage('React Hooks Deep Dive')
  }
}
