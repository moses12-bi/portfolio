import { Github, ExternalLink } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Bpay System",
      description:
        "A comprehensive payment management system for bike owners that simplifies daily payments, transaction tracking, and recurring income management.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Spring Boot", "Java", "MySQL"],
      githubUrl: "#", // Add your GitHub link when available
      liveUrl: "#", // Add live demo link when available
    },
    {
      title: "Stock Management System",
      description:
        "A robust inventory management solution that handles sales, purchases, and provides graphical reports for better business insights.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Java", "Spring Boot", "MySQL", "JSP"],
      githubUrl: "#", // Add your GitHub link when available
      liveUrl: "#", // Add live demo link when available
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="border border-gray-300 text-gray-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
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