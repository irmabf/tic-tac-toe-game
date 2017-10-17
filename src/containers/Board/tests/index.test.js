import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'

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
})
