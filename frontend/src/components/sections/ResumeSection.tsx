import React from 'react';

const ResumeSection: React.FC = () => {
  const experiences = [
    {
      role: 'SENIOR GRAPHIC DESIGN SPECIALIST',
      period: '2019 - Present',
      company: 'Experion, New York, NY',
      description: [
        'Lead in the design, development, and implementation of the graphic, layout, and production communication materials',
        'Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.',
        'Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design',
        'Oversee the efficient use of production project budgets ranging from $2,000 - $25,000'
      ]
    }
  ];

  const education = [
    {
      degree: 'MASTER OF FINE ARTS & GRAPHIC DESIGN',
      period: '2015 - 2016',
      school: 'Rochester Institute of Technology, Rochester, NY',
      description: 'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.'
    }
  ];

  return (
    <section id="resume" className="min-h-screen p-16 bg-white">
      <h2 className="text-3xl font-bold mb-8">Resume</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
          <div className="relative border-l-2 border-blue-500 pl-6 space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[29px] w-4 h-4 bg-blue-500 rounded-full" />
                <h4 className="text-lg font-bold text-gray-900">{exp.role}</h4>
                <span className="inline-block px-2 py-1 my-2 bg-blue-100 text-blue-800 text-sm rounded">
                  {exp.period}
                </span>
                <p className="italic text-gray-600 mb-2">{exp.company}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <div className="relative border-l-2 border-blue-500 pl-6 space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[29px] w-4 h-4 bg-blue-500 rounded-full" />
                <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                <span className="inline-block px-2 py-1 my-2 bg-blue-100 text-blue-800 text-sm rounded">
                  {edu.period}
                </span>
                <p className="italic text-gray-600 mb-2">{edu.school}</p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;