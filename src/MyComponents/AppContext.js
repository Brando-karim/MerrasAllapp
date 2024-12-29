import { createContext, useState } from 'react';

export const AppContext = createContext();

const translations = {
  en: {
    title: 'My Profile',
    location: 'Tanger',
    followers: 'Followers',
    projects: 'Projects',
    ranks: 'Ranks',
    follow: 'Follow',
    settings: 'Settings',
    themeSwitch: 'Switch Theme'
  },
  fr: {
    title: 'Mon Profil',
    location: 'Tanger',
    followers: 'Abonnés',
    projects: 'Projets',
    ranks: 'Rangs',
    follow: 'Suivre',
    settings: 'Paramètres',
    themeSwitch: 'Changer le thème'
  },
  ar: {
    title: 'ملفي الشخصي',
    location: 'طنجة',
    followers: 'المتابعون',
    projects: 'المشاريع',
    ranks: 'المراتب',
    follow: 'متابعة',
    settings: 'إعدادات',
    themeSwitch: 'تغيير المظهر'
  }
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
  const changeLanguage = (lang) => setLanguage(lang);
  const t = (key) => translations[language][key];

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleTheme, language, changeLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </AppContext.Provider>
  );
};
