import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import pl from '@/locales/pl.json'

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    pl
  },
  numberFormats: {
    en: {
      currency: {
        style: 'currency',
        currency: 'USD'
      }
    },
    pl: {
        currency: {
            style: 'currency',
            currency: 'PLN'
          }
    }
  }
})
