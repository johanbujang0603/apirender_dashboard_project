// import { addLocaleData } from 'react-intl';
import enLang from './entries/en-US';
import esLang from './entries/es-ES';
import koLang from './entries/ko-KO';
import itLang from './entries/it-IT';
import DeLang from './entries/de-DE';
import enRtlLang from './entries/en-US-rtl';
import FrLang from './entries/fr-FR';
import ZhLang from './entries/zh-CN';
import ArLang from './entries/ar';
import JaLang from './entries/ja-JP';
import SvLang from './entries/sv-SE';

// import {createIntl, createIntlCache, RawIntlProvider} from 'react-intl'

// // This is optional but highly recommended
// // since it prevents memory leak
// const cache = createIntlCache()

// const intl = createIntl({
//   locale: 'fr-FR',
//   messages: {}
// }, cache)

const AppLocale = {
  en: enLang,
  es: esLang,
  ko: koLang,
  it: itLang,
  de: DeLang,
  fr: FrLang,
  zh: ZhLang,
  ar: ArLang,
  ja: JaLang,
  sv: SvLang,
  enrtl: enRtlLang,
};
// addLocaleData(AppLocale.en.data);
// addLocaleData(AppLocale.es.data);
// addLocaleData(AppLocale.enrtl.data);

export default AppLocale;
