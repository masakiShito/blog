import React from 'react';

const PortfolioSection: React.FC = () => {
  const projects = [
    {
      title: '製品管理システム',
      category: 'システム刷新',
      period: '2022年9月 ～ 現在',
      description: [
        'Spring Batchを使用したバッチ処理の設計・実装',
        '設計書の修正を効率化するツールを作成し、工数を削減',
        '要件定義からテストまでを一貫して担当',
      ],
      technologies: 'Java, Spring Batch, Oracle, SVN',
    },
    {
      title: '工事申請管理システム',
      category: 'マルチブラウザ化',
      period: '2022年3月 ～ 2022年8月',
      description: [
        '既存システムの業務フローを理解し、設計書を最新化',
        'チームリーダーとしてプロジェクトを管理',
        '開発時の設計書更新により、不具合発生を最小限に抑制',
      ],
      technologies: 'HTML, CSS, JavaScript, jQuery, PostgreSQL, Jenkins',
    },
    {
      title: '電気系管理システム',
      category: '新規機能開発',
      period: '2021年8月 ～ 2021年10月',
      description: [
        'リーダーとして基本設計、詳細設計、テストを主導',
        '設計レビューの質を向上させ、不具合ゼロでリリース',
        'メンバー間のコミュニケーションを活発に取り、品質を確保',
      ],
      technologies: 'Java, Spring MVC, HTML, CSS, PostgreSQL',
    },
    {
      title: '支出管理システム',
      category: 'サーバリプレイス・追加機能開発',
      period: '2021年3月 ～ 2021年7月',
      description: [
        'プロジェクト管理能力を発揮し、遅延していたスケジュールを回復',
        '若手主体のメンバーをフォローしながらプロジェクトを推進',
        '基本設計書とテスト仕様書の作成、レビューを担当',
      ],
      technologies: 'C#, ASP.net, Oracle, SVN',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">ポートフォリオ</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-green-700 font-semibold mb-2">{project.category}</p>
                <span className="inline-block text-gray-500 text-sm mb-4">{project.period}</span>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  {project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                <p className="text-gray-500 text-sm">
                  使用技術: <span className="font-semibold">{project.technologies}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
