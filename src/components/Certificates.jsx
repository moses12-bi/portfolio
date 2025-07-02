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
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              download
            >
              View / Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Certificates