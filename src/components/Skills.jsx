const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      skills: ["React", "Spring Boot", "Java", "C++", "C", "PHP", "JavaScript", "HTML", "CSS", "SQL"],
    },
    {
      title: "Network & Systems",
      skills: ["Computer Network", "Subnetting", "DHCP Configuration", "Operating Systems (Windows, Linux, Ubuntu)"],
    },
    {
      title: "Certifications",
      skills: [
        "Network Operations - Internet Society",
        "Computer Network - Cisco Academy",
        "Operating Systems Basics - Cisco Academy",
        "Microsoft 365 Certified"
      ],
    },
    {
      title: "Teaching & Training",
      skills: [
        "Digital Marketing - SCRIPTY LABS"
      ],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Skills & Technologies</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills