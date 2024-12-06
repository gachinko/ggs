import { Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-br from-gray-50 to-blue-50 py-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            お問い合わせ
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            サービスについてのご質問・ご相談はこちら
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">メール</h3>
                  <a 
                    href="mailto:contact@gachin.co"
                    className="text-lg text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2"
                  >
                    contact@gachin.co
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">所在地</h3>
                  <div className="text-lg text-gray-600">
                    <p>熊本県合志市須屋2659-2</p>
                    <p className="text-sm text-gray-500 mt-1">(熊本高等専門学校 熊本キャンパス)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}