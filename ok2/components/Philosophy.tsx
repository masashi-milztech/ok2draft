import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-ok-gray">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 mb-8 uppercase">Philosophy</h2>
        <p className="text-2xl md:text-4xl font-light leading-relaxed text-ok-black mb-12">
          We bridge the gap between <br className="hidden md:block"/>
          <span className="font-medium">abstract ideas</span> and <span className="font-medium">concrete reality</span>.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left mt-16">
          <div className="p-6 bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-4 border-b pb-2 border-black inline-block">Consulting</h3>
            <p className="text-gray-600 text-sm leading-6">
              課題の本質を見極め、最適な解決策を提案します。ビジネスの成長を加速させるための戦略的パートナーとして伴走します。
            </p>
          </div>
          <div className="p-6 bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-4 border-b pb-2 border-black inline-block">Planning</h3>
            <p className="text-gray-600 text-sm leading-6">
              ゼロからイチを生み出す企画力。市場のニーズを捉え、心に響くブランド体験やプロジェクトを設計します。
            </p>
          </div>
          <div className="p-6 bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-4 border-b pb-2 border-black inline-block">Connecting</h3>
            <p className="text-gray-600 text-sm leading-6">
              人と人、企業と企業、日本と世界を繋ぐ。強力なネットワークを活かし、新しい価値創造の機会を創出します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};