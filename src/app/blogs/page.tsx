'use client';

import Link from 'next/link';

export default function Blogs() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Rahul Yadav
          </div>
          <div className="flex space-x-8">
            <Link href="/" className="hover:text-purple-300 transition-colors">Home</Link>
            <Link href="#about" className="hover:text-purple-300 transition-colors">About Me</Link>
            <Link href="#projects" className="hover:text-purple-300 transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-purple-300 transition-colors">Contact Me</Link>
          </div>
        </nav>
      </header>

      {/* Blogs Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">
            My Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-2">Understanding CI/CD Pipelines</h2>
              <p className="text-gray-300 mb-4">A deep dive into setting up efficient CI/CD pipelines for modern DevOps workflows.</p>
              <a href="https://example.com/ci-cd-blog" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-purple-300 transition-colors">
                Read More
              </a>
            </div>
            {/* Add more blog cards as needed */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
            Rahul Yadav
          </div>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.linkedin.com/in/rahul-yadav-2a4b3b199/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-300 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/rahulyadav2a4b3b199" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-300 transition-colors">
              GitHub
            </a>
            <a href="mailto:rahul@example.com" className="text-gray-300 hover:text-purple-300 transition-colors">
              Email
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Rahul Yadav. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}