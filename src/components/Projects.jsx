import { Github } from 'lucide-react';
import Food from '../Image/Food.jpg';
import Stock from '../Image/Stock.jpg';
import HR from '../Image/HR.jpg';
import Property from '../Image/Property.jpg';


const Projects = () => {
  const projects = [
    {
      title: "Food delivery System",
      description:
        "A food delivery system that allows users to order food from restaurants and have it delivered to their doorstep.",
      image: Food, 
      technologies: [ "Spring Boot", "postman", "postgresql"],
      githubUrl: "https://github.com/moses12-bi/food-delivery-system", // Add your GitHub link when available
    },
    {
      title: "Stock Management System",
      description:
        "A robust inventory management solution that handles sales, purchases, and provides graphical reports for better business insights and security measures for login .",
      image: Stock,
      technologies: ["react", "Spring Boot", "postgresql", "postman"],
      githubUrl: "https://github.com/moses12-bi/inventory-management-system", // Add your GitHub link when available
    },
    {
      title: "HR Management System",
      description: "A comprehensive HR management platform for employee records, payroll, and performance tracking.",
      image: HR, 
      technologies: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
      githubUrl: "https://github.com/moses12-bi/hr-management-system",
     
    },
    {
      title: "Property Management System",
      description: "A web-based solution for managing rental properties, tenants, and payments.",
      image: Property,
      technologies: ["React", "Node.js", "Postgres", "springboot", "Tailwind CSS"],
      githubUrl: "https://github.com/moses12-bi/property-management-system",

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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;