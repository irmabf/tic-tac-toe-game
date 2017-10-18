/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl/lib/index.es'
import enLocaleData from 'react-intl/locale-data/en'
import deLocaleData from 'react-intl/locale-data/de'

import enTranslationMessages from './translations/en.json'
import deTranslationMessages from './translations/de.json'

addLocaleData(enLocaleData)
addLocaleData(deLocaleData)

export const appLocales = [
	'en',
	'de',
]

export const formatTranslationMessages = (locale, messages) => {
	const defaultFormattedMessages = locale !== 'en'
    ? formatTranslationMessages('en', enTranslationMessages)
    : {}
	return Object.keys(messages).reduce((formattedMessages, key) => {
		const formattedMessage = !messages[key] && locale !== 'en'
      ? defaultFormattedMessages[key]
      : messages[key]
		return Object.assign(formattedMessages, { [key]: formattedMessage })
	}, {})
}

export const translationMessages = {
	en: formatTranslationMessages('en', enTranslationMessages),
	de: formatTranslationMessages('de', deTranslationMessages),
}
