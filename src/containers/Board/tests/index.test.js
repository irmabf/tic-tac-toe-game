import React from 'react'
import Provider from 'react-redux/lib/components/Provider'
import mount from 'enzyme/mount'
import renderer from 'react-test-renderer'

import LanguageProvider from '../../../containers/LanguageProvider'
import { translationMessages } from '../../../i18n'
import store from '../../../store'
import Board from '../index'
import BoardWrapper from '../BoardWrapper'

describe('<Board />', () => {
	it('should render <BoardWrapper>', () => {
		const renderedComponent = mount(
			<Provider store={store}>
				<LanguageProvider messages={translationMessages}>
					<Board />
				</LanguageProvider>
			</Provider>
		)
		expect(renderedComponent.find(BoardWrapper).length).toEqual(1)
	})

	it('<Board /> renders correctly', () => {
		const tree = renderer.create(
			<Provider store={store}>
				<LanguageProvider messages={translationMessages}>
					<Board />
				</LanguageProvider>
			</Provider>
		).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
