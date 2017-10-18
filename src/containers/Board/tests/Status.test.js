import React from 'react'
import Provider from 'react-redux/lib/components/Provider'
import shallow from 'enzyme/shallow'
import mount from 'enzyme/mount'

import LanguageProvider from '../../../containers/LanguageProvider'
import H2 from '../../../components/H2'
import { translationMessages } from '../../../i18n'
import store from '../../../store'
import Status from '../Status'

const props = {
	step: 1,
	currentPlayer: 'X',
	onePlayer: true,
	firstPlayerSymbol: 'X',
	secondPlayerSymbol: 'Y'
}

describe('<Status />', () => {
	it('should render an <h2> tag', () => {
		const renderedComponent = shallow(<Status {...props} />)
		expect(renderedComponent.type()).toEqual(H2)
	})

	it('should contain a FormattedMessage or a FormattedMarkdownMessage', () => {
		const renderedComponent = mount(
			<Provider store={store}>
				<LanguageProvider messages={translationMessages}>
					<Status {...props} />
				</LanguageProvider>
			</Provider>
		)
		expect(renderedComponent.find('span').length).toEqual(1)
	})
})
