import { RefObject } from 'react';

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

export function useScrollSpy(sectionRefs: RefObject<HTMLElement>[]) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          history.replaceState(null, '', `#${id}`);
        }
      });
    },
    { threshold: 0.5 }
  );

  return observer;
}