import React from 'react';

const AboutSection: React.FC = () => {
  const personalInfo = [
    { label: '誕生日', value: '1997年7月15日' },
    { label: 'ウェブサイト', value: 'www.morofujisan.com' },
    { label: '電話番号', value: '非公開' },
    { label: '所在地', value: '大阪' },
    { label: '年齢', value: '27歳' },
    { label: '学位', value: '現在取得中' },
    { label: 'メール', value: '非公開' },
    { label: 'フリーランス', value: '現在は考えていない' },
  ];

  const skills = [
    'Javaを使用したWebアプリケーションの設計・実装・テスト',
    '5人規模のチームリーダー経験',
    'Pythonを活用した業務効率化ツールの開発',
    '課題解決型のシステム提案と実現',
  ];

  const recentAchievements = [
    '製品管理システムの刷新プロジェクトで、Spring Batchを利用したバッチ処理の設計・実装を担当',
    'マルチブラウザ対応プロジェクトで、仕様書を最新化しつつ不具合を最小限に抑えることに成功',
    '業務効率化ツールをVBAで自作し、工数を1人日削減',
  ];

  return (
    <section id="about" className="min-h-screen p-16">
      <h2 className="text-3xl font-bold mb-8">MoroFujiについて</h2>
      <p className="text-gray-600 mb-8">
        5年以上の経験を持つシステムエンジニアです。Javaを中心としたWebアプリケーション開発やチームリーダーとしての経験があり、プロセスの効率化や自動化を得意としています。現在はさらにスキルを磨き、ユーザーにとって価値のあるソリューションを提供することを目指しています。
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
          <h3 className="text-2xl font-bold mb-4">プロフィール</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {personalInfo.map(({ label, value }) => (
              <p key={label} className="text-gray-700">
                <strong>{label}:</strong> {value}
              </p>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-4">得意分野</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <h3 className="text-xl font-bold mb-4">最近の実績</h3>
          <ul className="list-disc list-inside text-gray-700">
            {recentAchievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
