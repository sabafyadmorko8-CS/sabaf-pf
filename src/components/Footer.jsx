import React from 'react'
import { FaGithub, FaTelegram, FaTiktok, FaYoutube, FaInstagram, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/sabafyadmorko8-CS', label: 'GitHub' },
    { icon: FaTelegram, url: 'https://t.me/Shumiman12', label: 'Telegram' },
    { icon: FaTiktok, url: 'https://tiktok.com/@sabafyad3346', label: 'TikTok' },
    { icon: FaYoutube, url: 'https://youtube.com/@SabafyadMorko-r6g', label: 'YouTube' },
    { icon: FaInstagram, url: 'https://instagram.com/Sabafyad12', label: 'Instagram' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social, index) => {
              const getIconColor = (label) => {
                switch(label) {
                  case 'GitHub': return 'text-white hover:text-gray-300'
                  case 'Telegram': return 'text-blue-400 hover:text-blue-300'
                  case 'TikTok': return 'text-white hover:text-gray-300'
                  case 'YouTube': return 'text-red-500 hover:text-red-600'
                  case 'Instagram': return 'text-pink-400 hover:text-pink-300'
                  default: return 'text-white'
                }
              }
              
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-600 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className={`text-xl ${getIconColor(social.label)}`} />
                </a>
              )
            })}
          </div>

          <div className="text-center text-gray-400">
            <p className="mb-2">
              Made with <FaHeart className="inline text-red-500" /> by Sabafyad Morko
            </p>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
