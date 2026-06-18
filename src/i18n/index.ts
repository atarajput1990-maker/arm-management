// ─────────────────────────────────────────────────────────────────────────────
// ARM Management · i18n core
// ─────────────────────────────────────────────────────────────────────────────

export const LOCALES = ['en', 'fr', 'es', 'ar', 'ru', 'zh'] as const;
export type Locale = typeof LOCALES[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_META: Record<Locale, {
  label: string;    // display name in that language
  flag:  string;    // emoji flag
  dir:   'ltr' | 'rtl';
  htmlLang: string; // BCP-47
}> = {
  en: { label: 'English',  flag: '🇬🇧', dir: 'ltr', htmlLang: 'en' },
  fr: { label: 'Français', flag: '🇫🇷', dir: 'ltr', htmlLang: 'fr' },
  es: { label: 'Español',  flag: '🇪🇸', dir: 'ltr', htmlLang: 'es' },
  ar: { label: 'العربية',  flag: '🇦🇪', dir: 'rtl', htmlLang: 'ar' },
  ru: { label: 'Русский',  flag: '🇷🇺', dir: 'ltr', htmlLang: 'ru' },
  zh: { label: '中文',      flag: '🇨🇳', dir: 'ltr', htmlLang: 'zh-Hans' },
};

/** Resolve locale from a URL pathname (e.g. /fr/about → 'fr', /about → 'en') */
export function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0] as Locale;
  return LOCALES.includes(seg) ? seg : DEFAULT_LOCALE;
}

/** Strip locale prefix, returning a path always starting with / */
export function stripLocale(pathname: string): string {
  const seg = pathname.split('/').filter(Boolean)[0] as Locale;
  if (LOCALES.includes(seg) && seg !== DEFAULT_LOCALE) {
    return '/' + pathname.split('/').filter(Boolean).slice(1).join('/') || '/';
  }
  return pathname || '/';
}

/** Build a localised URL. English keeps root paths (no /en/ prefix). */
export function localePath(locale: Locale, path: string): string {
  const clean = path.replace(/^\/+/, '');
  if (locale === DEFAULT_LOCALE) return '/' + clean;
  return '/' + locale + (clean ? '/' + clean : '');
}

/** Generate hreflang alternate link objects for a given canonical path */
export function hreflangs(canonicalPath: string): { lang: string; url: string }[] {
  const base = 'https://arm-management.com';
  const clean = canonicalPath.replace(/^\/(en|fr|es|ar|ru|zh)\//, '/').replace(/^\/+/, '');
  return [
    ...LOCALES.map(l => ({
      lang: LOCALE_META[l].htmlLang,
      url:  base + localePath(l, clean),
    })),
    { lang: 'x-default', url: base + '/' + clean },
  ];
}
