import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type SectionText = {
  prefix: string;
  text: string;
};

type SectionContextType = {
  sectionText: SectionText;
  setSectionText: (text: SectionText) => void;
};

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: ReactNode }) {
  const [sectionText, setSectionText] = useState<SectionText>({ prefix: '', text: '' });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollPosition < windowHeight * 0.5) {
        setSectionText({ prefix: '', text: '' });
      } else if (scrollPosition < windowHeight * 1.5) {
        setSectionText({ prefix: 'for', text: 'everyone' });
      } else if (scrollPosition < windowHeight * 2.5) {
        setSectionText({ prefix: 'for', text: 'students' });
      } else if (scrollPosition < windowHeight * 3.5) {
        setSectionText({ prefix: 'for', text: 'employers' });
      } else if (scrollPosition < windowHeight * 4.5) {
        setSectionText({ prefix: 'for', text: 'employers' });
      } else {
        setSectionText({ prefix: 'in', text: 'touch' });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SectionContext.Provider value={{ sectionText, setSectionText }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSectionText() {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error('useSectionText must be used within a SectionProvider');
  }
  return context;
}