import React from 'react'
import { FaGithub, FaTelegram, FaTiktok, FaYoutube, FaInstagram } from 'react-icons/fa'

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/sabafyadmorko8-CS', label: 'GitHub' },
    { icon: FaTelegram, url: 'https://t.me/Shumiman12', label: 'Telegram' },
    { icon: FaTiktok, url: 'https://tiktok.com/@sabafyad3346', label: 'TikTok' },
    { icon: FaYoutube, url: 'https://youtube.com/@SabafyadMorko-r6g', label: 'YouTube' },
    { icon: FaInstagram, url: 'https://instagram.com/sabafyad12', label: 'Instagram' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 theme-bg-primary" style={{background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)'}}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 theme-text-primary">
              Hello, I'm <span className="text-green-600">Sabafyad Morko</span>
            </h2>
            <p className="text-xl md:text-2xl mb-6">
              <div className="overflow-hidden">
                <div className="animate-typing inline-block text-red-600 font-semibold border-r-2 border-red-600">
                  Computer Science Student 💻 Web Developer 🚀 Software Problem Solver 🔧
                </div>
              </div>
            </p>
            <p className="theme-text-secondary mb-8 max-w-lg">
              3rd year Computer Science student passionate about web development and software engineering. 
              I love turning ideas into code and building solutions that make a difference. 
              Always eager to learn new technologies and tackle challenging problems!
            </p>
            
            <div className="flex gap-4 justify-center md:justify-start mb-8">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900 transition-all"
              >
                View Work
              </button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social, index) => {
                const getIconColor = (label) => {
                  switch(label) {
                    case 'GitHub': return 'text-gray-800 hover:text-white'
                    case 'Telegram': return 'text-blue-500 hover:text-white'
                    case 'TikTok': return 'text-black hover:text-white'
                    case 'YouTube': return 'text-red-600 hover:text-white'
                    case 'Instagram': return 'text-pink-500 hover:text-white'
                    default: return 'text-gray-700 hover:text-white'
                  }
                }
                
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:scale-110 hover:bg-purple-500 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className={`text-xl ${getIconColor(social.label)}`} />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="./12.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/667eea/ffffff?text=Your+Photo'
                  }}
                />
              </div>
              <div className="absolute -z-10 top-4 left-4 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
