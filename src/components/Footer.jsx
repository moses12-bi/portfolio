import { Github, Linkedin, Phone, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex flex-col space-y-2">
              <p className="text-gray-600">Sebagabo Moses</p>
              <p className="text-gray-500 text-sm">Rwanda, Kigali</p>
            </div>
          </div>
          <div className="flex space-x-6">
            <a
              href="mailto:mosesebagabo01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+250784704153"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Phone size={20} />
            </a>
            <a
              href="https://linkedin.com/in/sebagabo-moses-8b748629b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 