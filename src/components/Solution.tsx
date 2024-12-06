import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FlowDiagram from './FlowDiagram';
import { Shield, Zap } from 'lucide-react';

export default function Solution() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "企業の課題",
      content: [
        "ナビサイトの登録は多い",
        "自社に興味を持ってくれる人材の発掘が難しい",
        "採用活動の効率化が必要"
      ],
      color: "red"
    },
    {
      title: "ガチリクのソリューション",
      content: [
        "AIを活用したES作成支援",
        "データ分析による最適なマッチング",
        "効率的な採用プロセスの実現"
      ],
      color: "blue"
    },
    {
      title: "期待される効果",
      content: [
        "質の高い応募者の増加",
        "採用コストの削減",
        "採用活動の効率化"
      ],
      color: "green"
    }
  ];

  return (
    <section id="solution" className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            ガチリクが考えるソリューション
          </h2>
          <p className="text-xl text-gray-600">採用活動の革新的なアプローチ</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300
                ${activeSection === index ? 'ring-2 ring-blue-500 scale-105' : ''}`}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveSection(index)}
            >
              <div className={`p-6 bg-gradient-to-br from-${section.color}-50 to-${section.color}-100`}>
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center text-gray-700"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">ESデータ活用の革新的なプロセス</h3>
          <FlowDiagram />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="p-8 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-orange-500 mr-3" />
              <h4 className="text-xl font-bold text-orange-700">攻めの戦略</h4>
            </div>
            <p className="text-gray-700 text-lg">
              追加エントリーを提案できる権利で可能性を広げる
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-blue-500 mr-3" />
              <h4 className="text-xl font-bold text-blue-700">守りの戦略</h4>
            </div>
            <p className="text-gray-700 text-lg">
              ダイレクトリクルーティングで確実な採用を実現
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}