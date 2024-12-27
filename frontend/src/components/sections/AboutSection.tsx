import React from 'react';

const AboutSection: React.FC = () => {
  const personalInfo = [
    { label: 'Birthday', value: '1 May 1995' },
    { label: 'Website', value: 'www.example.com' },
    { label: 'Phone', value: '+123 456 7890' },
    { label: 'City', value: 'New York, USA' },
    { label: 'Age', value: '30' },
    { label: 'Degree', value: 'Master' },
    { label: 'Email', value: 'email@example.com' },
    { label: 'Freelance', value: 'Available' },
  ];

  return (
    <section id="about" className="min-h-screen p-16">
      <h2 className="text-3xl font-bold mb-8">About</h2>
      <p className="text-gray-600 mb-8">
        UI/UX Designer & Web Developer with a passion for creating beautiful,
        functional, and user-centered digital experiences.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <img
            src="/api/placeholder/400/400"
            alt="About me"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">UI/UX Designer & Web Developer</h3>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {personalInfo.map(({ label, value }) => (
              <p key={label} className="text-gray-700">
                <strong>{label}:</strong> {value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;