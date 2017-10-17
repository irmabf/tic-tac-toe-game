import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'

import LanguageProvider from '../../../containers/LanguageProvider'
import { translationMessages } from '../../../i18n'
import store from '../../../store'
import Row from '../Row'
import Game from '../index'


describe('<Game />', () => {
	it('should render 3 Rows', () => {
		const renderedComponent = mount(
			<Provider store={store}>
				<LanguageProvider messages={translationMessages}>
					<Game />
				</LanguageProvider>
			</Provider>
		)
		expect(renderedComponent.find(Row).length).toBe(3)
	})
})

