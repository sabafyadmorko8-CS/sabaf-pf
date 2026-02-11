import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Text Content */}
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a dedicated 3rd year Computer Science student with a passion for web development and software engineering.
                My educational journey began at Oetu Elementary School, where I first discovered my love for technology and problem-solving.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I continued my academic path at Batu Preparatory School, where I strengthened my foundation in mathematics and sciences.
                Now, as a Computer Science student, I'm constantly exploring new technologies, building projects, and developing my skills
                in programming, web development, and software design. I believe in learning by doing and am always excited to take on new challenges.
              </p>
            </div>

            {/* Photo Section */}
            <div className="flex justify-center">
              <div className="flex flex-col gap-6">
                {/* First Photo */}
                <div className="relative">
                  <div className="w-40 h-40 rounded-lg overflow-hidden shadow-xl">
                    <img
                      src="/sabaf-pf/about-me-1.jpg"
                      alt="About Me - Photo 1"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/160x160/667eea/ffffff?text=Photo+1'
                      }}
                    />
                  </div>
                  <div className="absolute -z-10 top-2 left-2 w-40 h-40 rounded-lg bg-gradient-to-br from-blue-400 to-purple-400 opacity-30"></div>
                </div>
                
                {/* Second Photo */}
                <div className="relative">
                  <div className="w-40 h-40 rounded-lg overflow-hidden shadow-xl">
                    <img
                      src="/sabaf-pf/about-me-2.jpg"
                      alt="About Me - Photo 2"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/160x160/764ba2/ffffff?text=Photo+2'
                      }}
                    />
                  </div>
                  <div className="absolute -z-10 top-2 left-2 w-40 h-40 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400 opacity-30"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
              <div className="text-4xl font-bold gradient-text mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
              <div className="text-4xl font-bold gradient-text mb-2">30+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
              <div className="text-4xl font-bold gradient-text mb-2">30+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
