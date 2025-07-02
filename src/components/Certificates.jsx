const certificates = [
  {
    title: "Linux Certificate - Andela",
    file: "/Certificate/Linux-Andela-certificate.pdf",
  },
  {
    title: "NetOps1 Certificate",
    file: "/Certificate/Netops1-certificate.pdf",
  },
  {
    title: "Operating Systems Basics - Cisco Academy",
    file: "/Certificate/Operating_Systems_Basics_Badge20241204-26-1aqqjo.pdf",
  },
  {
    title: "Andela Certificate",
    file: "/Certificate/sebagabo-moses-certificate-Andela.pdf",
  },
  {
    title: "Computer Network - Cisco Academy",
    file: "/Certificate/SebagaboMoses-Computer-network-certificate.pdf",
  },
]

const Certificates = () => (
  <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Certificates</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {certificates.map((cert, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{cert.title}</h3>
            <div className="flex gap-3 mt-2">
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                View PDF
              </a>
              <a
                href={cert.file}
                download
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-gray-700">Contact: <a href="mailto:mosesebagabo01@gmail.com" className="text-blue-600 hover:underline">mosesebagabo01@gmail.com</a></p>
      </div>
    </div>
  </section>
)

export default Certificates