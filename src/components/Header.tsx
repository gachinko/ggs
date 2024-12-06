import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { useSectionText } from '../context/SectionContext';
import { scrollToSection } from '../utils/scroll';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { sectionText } = useSectionText();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const id = href.slice(1);
      scrollToSection(id);
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { href: '#features', text: '特徴' },
    { href: '#student-challenges', text: '学生の方へ' },
    { href: '#company-solutions', text: '企業の方へ' },
    { href: '#es-process', text: 'ESデータ活用' },
    { href: '#contact', text: 'お問い合わせ' },
  ];

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Logo />
            <AnimatePresence mode="wait">
              <motion.div
                key={`${sectionText.prefix}-${sectionText.text}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center space-x-1"
              >
                {sectionText.prefix && (
                  <span className="text-lg font-medium text-gray-400">
                    {sectionText.prefix}
                  </span>
                )}
                {sectionText.text && (
                  <span className="text-lg font-medium bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    {sectionText.text}
                  </span>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.text}
              </a>
            ))}
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}