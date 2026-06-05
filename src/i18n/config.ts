// Central i18n configuration: locale lists, metadata, and the translation loader.

export const locales = ['no', 'en', 'sq', 'ar', 'fa', 'tr', 'id', 'ur', 'ce', 'so', 'zgh'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'no';

// Locales that must render right-to-left.
export const rtlLocales: Locale[] = ['ar', 'fa', 'ur'];

// Locales whose translations were AI-generated and carry a quality disclaimer.
export const aiTranslatedLocales: Locale[] = ['ce', 'zgh'];

// Native display names for the language switcher.
export const localeNames: Record<Locale, string> = {
  no: 'Norsk',
  en: 'English',
  sq: 'Shqip',
  ar: 'العربية',
  fa: 'فارسی',
  tr: 'Türkçe',
  id: 'Bahasa Indonesia',
  ur: 'اردو',
  ce: 'Нохчийн',
  so: 'Soomaali',
  zgh: 'ⵜⴰⵎⴰⵣⵉⵖⵜ',
};

// Flag emoji for each locale (representative country/region).
export const localeFlags: Record<Locale, string> = {
  no: '🇳🇴',
  en: '🇬🇧',
  sq: '🇦🇱',
  ar: '🇸🇦',
  fa: '🇮🇷',
  tr: '🇹🇷',
  id: '🇮🇩',
  ur: '🇵🇰',
  ce: '🇷🇺',
  so: '🇸🇴',
  zgh: '🇲🇦',
};

export function isRTL(lang: string): boolean {
  return rtlLocales.includes(lang as Locale);
}

export function isValidLocale(lang: string | undefined): lang is Locale {
  return !!lang && (locales as readonly string[]).includes(lang);
}

// Eagerly import every translation file so they are bundled at build time.
const translations = import.meta.glob<{ default: Record<string, any> }>('./*.json', {
  eager: true,
});

export type Translations = Record<string, any>;

export function getTranslations(lang: string): Translations {
  const key = `./${isValidLocale(lang) ? lang : defaultLocale}.json`;
  return translations[key].default;
}

// Build localized paths, e.g. localizePath('en', '/about') -> '/en/about'.
export function localizePath(lang: string, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  return `/${lang}/${clean}`.replace(/\/+$/, '') || `/${lang}`;
}
