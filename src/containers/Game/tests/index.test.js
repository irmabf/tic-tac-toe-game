import React from 'react'
import Provider from 'react-redux/lib/components/Provider'
import mount from 'enzyme/mount'
import renderer from 'react-test-renderer'

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

	it('<Game /> renders correctly', () => {
		const tree = renderer.create(
			<Provider store={store}>
				<LanguageProvider messages={translationMessages}>
					<Game />
				</LanguageProvider>
			</Provider>
		).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
