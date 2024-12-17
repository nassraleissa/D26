import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-primary-700 dark:text-primary-300">
            About ModernBlog
          </h1>
          <div className="space-y-6 text-lg">
            <p>
              ModernBlog is a cutting-edge platform dedicated to sharing insights and knowledge about the latest trends in web development, design, and technology.
            </p>
            <p>
              Our team of experienced developers and designers are passionate about creating content that helps our readers stay ahead in the fast-paced world of modern web development.
            </p>
            <p>
              Whether you're a seasoned professional or just starting your journey in tech, ModernBlog has something for everyone.
            </p>
            <div className="flex space-x-4 mt-8">
              <a 
                href="#" 
                className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Our Mission
              </a>
              <a 
                href="#" 
                className="border border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-primary-400/50 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          <Image 
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
            alt="ModernBlog Team" 
            width={600} 
            height={400} 
            className="relative z-10 rounded-xl shadow-2xl transform group-hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-4 text-primary-600">Our Vision</h3>
          <p>To be the go-to resource for developers seeking cutting-edge insights and innovative solutions.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-4 text-primary-600">Our Values</h3>
          <p>Innovation, continuous learning, community, and sharing knowledge that empowers developers worldwide.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-4 text-primary-600">Our Community</h3>
          <p>A global network of passionate developers, designers, and tech enthusiasts sharing their expertise.</p>
        </div>
      </div>
    </div>
  )
}
