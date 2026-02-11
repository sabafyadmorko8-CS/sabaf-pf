import React, { useState, useEffect, useRef } from 'react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedLevels, setAnimatedLevels] = useState({})
  const sectionRef = useRef(null)

  const skills = [
    { name: 'React.js', level: 65 },
     { name: 'PHP', level: 70 },
    { name: 'JavaScript', level: 75 },
    { name: 'Tailwind CSS', level: 68 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Node.js', level: 60 },
    { name: 'Git', level: 85 },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateSkills()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  const animateSkills = () => {
    skills.forEach((skill, index) => {
      let currentLevel = 0
      const increment = skill.level / 50 // 50 steps for smooth animation
      
      const interval = setInterval(() => {
        currentLevel += increment
        if (currentLevel >= skill.level) {
          currentLevel = skill.level
          clearInterval(interval)
        }
        setAnimatedLevels(prev => ({
          ...prev,
          [index]: Math.round(currentLevel)
        }))
      }, 20)
    })
  }

  const getProgressColor = (level) => {
    if (level < 30) {
      return 'from-red-500 to-orange-500' // Red to Orange (0-29%)
    } else if (level < 60) {
      return 'from-yellow-500 to-amber-500' // Yellow to Amber (30-59%)
    } else if (level < 80) {
      return 'from-blue-500 to-cyan-500' // Blue to Cyan (60-79%)
    } else {
      return 'from-green-500 to-emerald-500' // Green to Emerald (80-100%)
    }
  }

  const getTextColor = (level) => {
    if (level < 30) {
      return 'text-red-600'
    } else if (level < 60) {
      return 'text-yellow-600'
    } else if (level < 80) {
      return 'text-blue-600'
    } else {
      return 'text-green-600'
    }
  }

  return (
    <section id="skills" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">{skill.name}</span>
                  <span className={`font-bold ${getTextColor(animatedLevels[index] || 0)}`}>
                    {animatedLevels[index] || 0}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`bg-gradient-to-r ${getProgressColor(animatedLevels[index] || 0)} h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${animatedLevels[index] || 0}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
