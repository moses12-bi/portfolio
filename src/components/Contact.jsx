import { Mail, Linkedin, Phone } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Based in Kigali, Rwanda. Available for remote work opportunities. Feel free to reach out for any technical support, development projects, or to discuss potential collaborations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:mosesebagabo01@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <Mail size={20} />
            Send Email
          </a>
          <a
            href="https://linkedin.com/in/sebagabo-moses-8b748629b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn Profile
          </a>
          <a
            href="tel:+250784704153"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            <Phone size={20} />
            Call Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact 