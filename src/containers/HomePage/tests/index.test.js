/**
 * Test the HomePage
 */

import React from 'preact-compat'
import shallow from 'enzyme/shallow'
import { FormattedMessage } from 'react-intl'

import H1 from 'components/H1'
import Board from 'containers/Board'
import messages from '../messages'
import HomePage from '../index'

describe('<HomePage />', () => {
	it('should render its heading', () => {
		const renderedComponent = shallow(<HomePage />)
		expect(renderedComponent.contains(
			<H1>
				<FormattedMessage {...messages.heading} />
			</H1>
		)).toBe(true)
	})

	it('should render its content', () => {
		const renderedComponent = shallow(<HomePage />)
		expect(renderedComponent.find(Board).length).toEqual(1)
	})
})
