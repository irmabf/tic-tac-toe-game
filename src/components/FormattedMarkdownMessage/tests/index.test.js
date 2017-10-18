import React from 'preact-compat'
import { defineMessages } from 'react-intl'
import Provider from 'react-redux/lib/components/Provider'
import mount from 'enzyme/mount'

import LanguageProvider from '../../../containers/LanguageProvider'
import FormattedMarkdownMessage from '../index'
import store from '../../../store'
import { translationMessages } from '../../../i18n'

const messages = defineMessages({
	messageWithValues: {
		id: 'some.id1',
		defaultMessage: 'This is some {defaultMessage}'
	},
	defaultMessage: {
		id: 'some.id2',
		defaultMessage: 'Default Message'
	},
	messageWithoutValues: {
		id: 'some.id1',
		defaultMessage: 'This is some message'
	},
})

describe('<FormattedMarkdownMessage />', () => {
	it('should render messages with Markdown', () => {
		const renderedComponent = mount(
			<Provider store={store}>
				<LanguageProvider messages={translationMessages}>
					<FormattedMarkdownMessage
						{...messages.messageWithoutValues}
					/>
				</LanguageProvider>
			</Provider>
		)
		expect(renderedComponent.contains(
			<FormattedMarkdownMessage
				{...messages.messageWithoutValues}
			/>
		)).toBe(true)
	})
})

describe('<FormattedMarkdownMessage />', () => {
	it('should render messages with Markdown and values', () => {
		const renderedComponent = mount(
			<Provider store={store}>
				<LanguageProvider messages={translationMessages}>
					<FormattedMarkdownMessage
						{...messages.messageWithValues}
						values={{ defaultMessage: messages.defaultMessage.defaultMessage }}
					/>
				</LanguageProvider>
			</Provider>
		)
		expect(renderedComponent.contains(
			<FormattedMarkdownMessage
				{...messages.messageWithValues}
				values={{ defaultMessage: messages.defaultMessage.defaultMessage }}
			/>
		)).toBe(true)
	})
})
