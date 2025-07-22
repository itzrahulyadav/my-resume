'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cards, setCards] = useState([
    { id: 1, top: 10, left: 10, velocityX: 0.5, velocityY: 0.5, content: 'DevOps' },
    { id: 2, top: 20, left: 70, velocityX: -0.3, velocityY: 0.3, content: 'Networking' },
    { id: 3, top: 50, left: 30, velocityX: 0.2, velocityY: -0.5, content: 'Cloud Security' },
  ]);

  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateCards = () => {
      const section = sectionRef.current;
      if (!section) return;

      const updatePositions = () => {
        setCards((prev) =>
          prev.map((card) => {
            let newTop = card.top + card.velocityY;
            let newLeft = card.left + card.velocityX;

            if (newTop <= 0 || newTop >= 90) card.velocityY = -card.velocityY;
            if (newLeft <= 0 || newLeft >= 90) card.velocityX = -card.velocityX;

            newTop = Math.max(0, Math.min(90, newTop));
            newLeft = Math.max(0, Math.min(90, newLeft));

            return { ...card, top: newTop, left: newLeft };
          })
        );
      };

      controls.start({
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        },
      });

      const interval = setInterval(updatePositions, 50);
      return () => clearInterval(interval);
    };

    animateCards();
  }, [controls]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Rahul Yadav
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-purple-300 transition-colors">About Me</Link>
            <Link href="#projects" className="hover:text-purple-300 transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-purple-300 transition-colors">Contact Me</Link>
          </div>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
            <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
              <Link href="#about" className="hover:text-purple-300 transition-colors" onClick={() => setIsMenuOpen(false)}>About Me</Link>
              <Link href="#projects" className="hover:text-purple-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</Link>
              <Link href="#contact" className="hover:text-purple-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact Me</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section ref={sectionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">
            I am Rahul Yadav
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Connect with me on{' '}
            <a href="https://www.linkedin.com/in/rahul-yadav-2a4b3b199/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-purple-300 transition-colors">
              LinkedIn
            </a>
          </p>
          <div className="flex justify-center space-x-4">
            <a href="tel:+919691868731" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              Call Me
            </a>
            <a href="https://www.abstractionapp.click" className="px-6 py-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors">
              Try Abstraction
            </a>
          </div>
        </div>
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={`absolute w-64 p-4 rounded-2xl bg-white/10 backdrop-blur-lg border text-center transition-transform duration-300 hover:scale-105 ${
              card.content === 'DevOps' ? 'border-blue-500/30' :
              card.content === 'Networking' ? 'border-pink-500/30' :
              'border-purple-500/30'
            }`}
            style={{
              boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3), 0 0 60px rgba(0, 0, 0, 0.2), ${
                card.content === 'DevOps' ? '0 0 20px rgba(59, 130, 246, 0.5)' :
                card.content === 'Networking' ? '0 0 20px rgba(236, 72, 153, 0.5)' :
                '0 0 20px rgba(168, 85, 247, 0.5)'
              }`,
              top: `${card.top}%`,
              left: `${card.left}%`
            }}
            animate={controls}
          >
            <div className="mb-3 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-10 w-10 ${
                card.content === 'DevOps' ? 'text-blue-500' :
                card.content === 'Networking' ? 'text-pink-500' :
                'text-purple-500'
              }`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {card.content === 'DevOps' && (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                )}
                {card.content === 'Networking' && (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8m-8 3h8m-8 3h8m-8 3h8m-8-9v12m8-12v12" />
                )}
                {card.content === 'Cloud Security' && (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm0 0c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4z" />
                )}
              </svg>
            </div>
            <h2 className={`text-lg font-bold mb-1 ${
              card.content === 'DevOps' ? 'text-blue-500' :
              card.content === 'Networking' ? 'text-pink-500' :
              'text-purple-500'
            }`}>
              {card.content}
            </h2>
            <p className="text-gray-300 text-sm">
              {card.content === 'DevOps' && 'Streamline your deployment pipeline.'}
              {card.content === 'Networking' && 'Optimize your network performance.'}
              {card.content === 'Cloud Security' && 'Protect your cloud assets securely.'}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Additional Cards Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-xl backdrop-blur-md text-center">
            <div className="text-2xl mb-2">Coffee Compilers</div>
            <p className="text-gray-300">Servers run on premium coffee. No crashes, just caffeine!</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-xl backdrop-blur-md text-center">
            <div className="text-2xl mb-2">Eureka Engine</div>
            <p className="text-gray-300">So intuitive, it’ll finish your infrastructure before you do.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-xl backdrop-blur-md text-center">
            <div className="text-2xl mb-2">Backup Proof</div>
            <p className="text-gray-300">Unlike your ex, our platform won’t leave you unexpectedly.</p>
          </div>
        </div>
      </section>

      {/* 🎥 Video Player Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Watch My Demo</h2>
          <video
            controls
            className="mx-auto w-full max-w-3xl rounded-lg shadow-lg"
            poster="https://your-bucket-name.s3.amazonaws.com/path/to/thumbnail.jpg"
          >
            <source
              src="https://your-bucket-name.s3.amazonaws.com/path/to/video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
}
