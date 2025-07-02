import { Download } from "lucide-react"

const About = () => {
  const image = new URL('../Image/moses.png', import.meta.url).href

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-600 text-lg font-medium">
                I'm Sebagabo Moses, a passionate Software Engineer with expertise in web development and system management.
              </p>
              <div className="mt-4 space-y-4">
                <p className="text-gray-600">
                  Specializing in creating efficient and scalable solutions, I bring a strong focus on technical support and troubleshooting to every project.
                </p>
                <p className="text-gray-600">
                  Based in Kigali, Rwanda, I'm available for remote work opportunities and always excited to collaborate on new projects.
                </p>
              </div>
              <a
                href="/Sebagabo-cv.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-medium transition-colors mt-4 hover:bg-primary-700"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={image}
                  alt="Profile Picture"
                  className="w-48 h-48 rounded-full object-cover border-4 border-primary-500 shadow-3xl"
                />
                <div className="absolute -bottom-2 right-0 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Software Engineer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;