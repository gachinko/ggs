import { motion } from 'framer-motion';
import { Shield, Zap } from 'lucide-react';

export default function ESProcess() {
  return (
    <section id="es-process" className="min-h-screen bg-gray-50 py-24 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">ESデータ活用の革新的なプロセス</h2>
          <p className="text-xl text-gray-600">
            効率的なデータ活用で、より良いマッチングを実現
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <img 
            src="/flow-diagram.svg" 
            alt="ESデータ活用フロー" 
            className="w-full h-auto max-w-4xl mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="p-8 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 shadow-lg"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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