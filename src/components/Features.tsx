import { BrainCircuit, Users, Target } from 'lucide-react';

export default function Features() {
  const features = [
    {
      name: 'AIを用いたES作成の補助',
      description: 'AIとの対話を通じて、より効果的なESを作成。自己理解も深まります。',
      icon: BrainCircuit
    },
    {
      name: '企業と学生をダイレクトにつなぐ',
      description: '独自のマッチングシステムで、より適切な企業との出会いを実現します。',
      icon: Users
    },
    {
      name: '高精度なターゲット広告',
      description: '学生の興味や経験に基づいた、パーソナライズされた企業情報を提供。',
      icon: Target
    }
  ];

  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            特徴
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            就活をより効果的に、より簡単に
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute h-12 w-12 text-blue-600">
                  <feature.icon className="h-12 w-12" />
                </div>
                <div className="ml-16">
                  <h3 className="text-xl font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}