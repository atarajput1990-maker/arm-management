export * from './index';
export * from './types';
export { en } from './en';
export { fr } from './fr';
export { es } from './es';
export { ar } from './ar';
export { ru } from './ru';
export { zh } from './zh';

import { en } from './en';
import { fr } from './fr';
import { es } from './es';
import { ar } from './ar';
import { ru } from './ru';
import { zh } from './zh';
import type { Locale } from './index';
import type { Translation } from './types';

export const translations: Record<Locale, Translation> = { en, fr, es, ar, ru, zh };

export function t(locale: Locale): Translation {
  return translations[locale] ?? translations.en;
}
