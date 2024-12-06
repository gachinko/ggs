import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Problems() {
  const studentWorries = [
    {
      notStarted: '何から始めていいかわからない',
      started: 'ESをうまく書けるか不安'
    },
    {
      notStarted: 'ESをうまく書けるか不安',
      started: '面接を通過できるか不安'
    },
    {
      notStarted: '企業や業界の情報をどう集めればいいかわからない',
      started: 'テストに通過できるか不安'
    }
  ];

  const studentChallenges = [
    'ナビサイトの登録で動きが止まる',
    '企業エントリーのためにESを書くものの上手くかけるか不安'
  ];

  const solutions = [
    '就活生がAIと質問・対話しながらESの作成',
    '対話の過程で自己分析や企業理解につながる'
  ];

  return (
    <section id="problems" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">就活生の悩み</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">順位</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">就活を始めていない学生の悩み</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">就活を始めている学生の悩み</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {studentWorries.map((worry, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{worry.notStarted}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{worry.started}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="grid gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">学生側の課題</h3>
              <ul className="space-y-4">
                {studentChallenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">ソリューション</h3>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}