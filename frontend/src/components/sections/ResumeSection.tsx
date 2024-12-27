import React from 'react';

const ResumeSection: React.FC = () => {
  const experiences = [
    {
      role: '予約システムの開発',
      period: '2024年6月 ～ 現在',
      skill: 'BE : Node.js、FE：React',
      description: [
        'フルスタックエンジニアとしての経験を積む',
        '要件定義から設計、実装、テストまで一貫して担当中',
        '共通化を徹底し、開発効率を向上',
      ],
    },
    {
      role: '予約システムの新規開発',
      period: '2023年10月 ～ 2024年5月',
      skill: 'BE : Python',
      description: [
        '基幹システムを利用したサードパティシステムの開発',
        '外部APIを使用したデータ連携の設計・実装をほぼ一人で行う',
        'Python未経験での参画で圧倒的な成果を残す',
      ],
    },
    {
      role: 'インフラシステムの開発',
      period: '2021年8月 ～ 2022年2月',
      skill: 'BE：Java spring boot',
      description: [
        '実装途中からの参画',
        '実装、テスト、リリースまで一貫して担当',
        '他案件を担当しながらの保守運用',
      ],
    },
  ];

  const education = [
    {
      degree: '情報工学',
      period: '2016年4月 ～ 2020年3月',
      school: '同志社大学',
      description: '情報工学を学んでいたが、実務経験を積むために中退',
    },
    {
      degree: '情報コース',
      period: '2024年4月 ～ 現在',
      school: '放送大学',
      description: '学士の取得を目指して日々学習中',
    },
  ];

  return (
    <section id="resume" className="min-h-screen p-16 bg-white">
      <h2 className="text-3xl font-bold mb-8">職務経歴</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6">実務経験</h3>
          <div className="relative border-l-2 border-green-500 pl-6 space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[32px] w-4 h-4 bg-green-500 rounded-full" />
                <h4 className="text-lg font-bold text-gray-900">{exp.role}</h4>
                <span className="inline-block px-2 py-1 my-2 bg-blue-100 text-green-800 text-sm rounded">
                  {exp.period}
                </span>
                <p className="italic text-gray-600 mb-2">{exp.skill}</p>
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
          <h3 className="text-2xl font-bold mb-6">学歴</h3>
          <div className="relative border-l-2 border-green-500 pl-6 space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[32px] w-4 h-4 bg-green-500 rounded-full" />
                <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                <span className="inline-block px-2 py-1 my-2 bg-blue-100 text-green-800 text-sm rounded">
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
