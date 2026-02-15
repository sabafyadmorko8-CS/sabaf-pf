import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'Blood Group System',
      description: 'The blood group system is a way of classifying human blood based on antigens present on the surface of red blood cells (RBCs). Coming Soon!',
      image: './project1.jpg',
      tags: ['React', 'Java', 'MongoDB'],
      link: '#',
      status: 'Coming Soon'
    },
    {
      title: 'Library Management System',
      description: 'A comprehensive full-stack system for managing library resources, books, and user accounts. Built with modern web technologies.',
      image: './project2.jpg',
      tags: ['HTML', 'JavaScript', 'PHP', 'Node.js', 'React.js', 'Laravel'],
      link: '#',
      status: 'Coming Soon'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern and responsive portfolio website with smooth animations and dark mode support.',
      image: './project3.jpg',
      tags: ['React', 'Tailwind', 'Vite'],
      link: 'https://github.com/sabafyadmorko8-CS/sabaf-pf',
      status: 'Completed'
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href={project.link}
                    className={`inline-block px-6 py-2 rounded-full transition-all ${
                      project.status === 'Coming Soon' 
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                    }`}
                    onClick={project.status === 'Coming Soon' ? (e) => e.preventDefault() : undefined}
                  >
                    {project.status === 'Coming Soon' ? 'Coming Soon' : 'View Project'}
                  </a>
                  {project.status && (
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'Coming Soon' 
                        ? 'bg-yellow-100 text-yellow-600' 
                        : 'bg-green-100 text-green-600'
                    }`}>
                      {project.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
