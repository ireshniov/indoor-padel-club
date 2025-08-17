'use client';

import { useState, useEffect } from 'react';

export type Language = 'de' | 'en' | 'ru';

export function useLanguage() {
  const [lang, setLang] = useState<Language>('ru');

  useEffect(() => {
    // Загружаем язык из localStorage при инициализации
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['de', 'en', 'ru'].includes(savedLang)) {
      setLang(savedLang);
    }
  }, []);

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('language', newLang);
  };

  return { lang, changeLanguage };
}

