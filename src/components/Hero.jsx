import { Github, Linkedin, Mail } from "lucide-react"
//import { scrollToSection } from '../utils/scroll'
import { useDownload } from '../hooks/useDownload'

const Hero = () => {
  const { downloadFile, isLoading, error } = useDownload()

  const handleDownload = () => {
    downloadFile('/assets/resume.pdf', 'Sebagabo_Moses_Resume.pdf')
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-20 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              Sebagabo Moses
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            <span className="block mb-4 text-2xl font-semibold text-primary-600">Software Engineer</span>
            <span className="block">Based in Kigali, Rwanda</span>
            <span className="block mt-2">Specializing in web development and system management</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-primary-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-primary-700 transition-colors transform hover:scale-105 duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-medium hover:bg-primary-50 transition-colors flex items-center justify-center gap-2 transform hover:scale-105 duration-300"
            >
              <Mail size={20} />
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              onClick={handleDownload}
              disabled={isLoading}
              className={`text-gray-600 transition-colors transform duration-300 ${
                isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:text-primary-600 hover:scale-110'
              }`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mosesebagabo01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors transform hover:scale-110 duration-300"
            >
              {isLoading ? (
                <div className="animate-spin">
                  <Mail size={24} />
                </div>
              ) : (
                <Mail size={24} />
              )}
            </a>
          </div>
          {error && (
            <p className="mt-4 text-sm text-red-500">{error}</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero 