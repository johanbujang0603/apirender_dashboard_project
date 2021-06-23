/* 
Menu Types:
"menu-default", "menu-sub-hidden", "menu-hidden"
*/
export const defaultMenuType = 'menu-default';

export const subHiddenBreakpoint = 1440;
export const menuHiddenBreakpoint = 768;
export const defaultLocale = 'en';
export const localeOptions = [
  { id: 'en', name: 'English', direction: 'ltr' },
  { id: 'es', name: 'Español', direction: 'ltr' },
  { id: 'ko', name: '조선어', direction: 'ltr' },
  { id: 'it', name: 'Italiano', direction: 'ltr' },
  { id: 'de', name: 'Deutsche', direction: 'ltr' },
  { id: 'fr', name: 'Français', direction: 'ltr' },
  { id: 'zh', name: '中文', direction: 'ltr' },
  { id: 'ar', name: 'عربى', direction: 'rtl' },
  { id: 'ja', name: '日本人', direction: 'ltr' },
  { id: 'sv', name: 'Svenska', direction: 'ltr' },
  // { id: 'enrtl', name: 'English - RTL', direction: 'rtl' },
];

export const searchPath = '/app/pages/miscellaneous/search';
export const servicePath = 'https://api.coloredstrategies.com';

export const themeColorStorageKey = '__theme_selected_color';
export const isMultiColorActive = false;
export const defaultColor = 'light.blueolympic';
export const isDarkSwitchActive = false;
export const defaultDirection = 'ltr';
export const themeRadiusStorageKey = '__theme_radius';
export const isDemo = false;
export const colors = [
  'blueolympic',
];
