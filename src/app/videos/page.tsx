'use client';

import Link from 'next/link';

export default function Videos() {
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

      {/* Videos Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">AWS EKS multi-region setup</h2>
          <video
            controls
            className="mx-auto w-full max-w-3xl rounded-lg shadow-lg"
            poster="https://your-bucket-name.s3.amazonaws.com/path/to/thumbnail.jpg"
          >
           <source
  src="https://eks-rxhxl.s3.ap-south-1.amazonaws.com/Screen+Recording+2025-07-22+at+1.22.00%E2%80%AFAM.mov"
  type="video/mp4"
/>
            Your browser does not support the video tag.
          </video>
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
