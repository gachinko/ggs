import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 pt-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            就活をもっと柔軟に
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="block"
            >
              アクティブに
            </motion.span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-3 max-w-md mx-auto text-base text-blue-50 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            AIを活用した新しい就活支援プラットフォーム。
            あなたの可能性を最大限に引き出します。
          </motion.p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 w-full h-16 bg-white transform skew-y-3 origin-bottom-right"></div>
    </div>
  );
}