'use client';

import React, { createContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
export type Navigations = 'Home' | 'About Me' | 'Services' | 'Projects' | 'Contact'

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  activeLink: Navigations;
  setActiveLink: (link: Navigations) => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
  activeLink: 'Home',
  setActiveLink: () => {},
});

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>('light');

  const [activeLink, setActiveLink] = useState<Navigations>('Home');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const preferred = stored || (systemPrefersDark ? 'dark' : 'light');

    setTheme(preferred);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };


  useEffect(() => {

    const scrollContainer = document.querySelector('main') as HTMLElement; // or your scrollable element

    if (!scrollContainer) return;

    const handleScroll = () => {

    

      const sections = document.querySelectorAll('[data-section]') as NodeListOf<HTMLElement>;

      let currentSection: Navigations = 'Home';
          console.log("hello")

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {

          switch (section.getAttribute('id')) {
            case 'home':
              currentSection = 'Home';
              break;
            case 'about-me':
              currentSection = 'About Me';
              break;
            case 'services':
              currentSection = 'Services';
              break;
            case 'projects':
              currentSection = 'Projects';
              break;
            case 'contact':
              currentSection = 'Contact';
              break;
            default:
              break;
          }
        }
      })

      setActiveLink(currentSection);
    }


    scrollContainer.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, activeLink, setActiveLink }}>
      {children}
    </ThemeContext.Provider>
  );
}
