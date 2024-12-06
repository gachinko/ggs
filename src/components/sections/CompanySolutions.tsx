import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle } from 'lucide-react';

const companyChallenges = [
  "ナビサイトの登録は多い",
  "自社に興味を持ってくれる人材の発掘が難しい",
  "採用活動の効率化が必要"
];

const solutions = [
  "AIを活用したES作成支援",
  "データ分析による最適なマッチング",
  "効率的な採用プロセスの実現"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function CompanySolutions() {
  return (
    <section id="company-solutions" className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-24 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            企業の課題とソリューション
          </h2>
          <p className="text-xl text-gray-600">採用活動の革新的なアプローチ</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8">
              <h3 className="text-2xl font-bold mb-8 text-gray-800">企業の課題</h3>
              <ul className="space-y-6">
                {companyChallenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4"
                  >
                    <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8">
              <h3 className="text-2xl font-bold mb-8 text-gray-800">ガチリク‼ が考えるソリューション</h3>
              <ul className="space-y-6">
                {solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{solution}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}