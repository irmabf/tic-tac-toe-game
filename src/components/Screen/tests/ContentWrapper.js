import React from 'preact-compat'
import shallow from 'enzyme/shallow'

import ContentWrapper from '../ContentWrapper'

describe('<Screen />', () => {
	it('should render an <div> tag', () => {
		const renderedComponent = shallow(<ContentWrapper />)
		expect(renderedComponent.type()).toEqual('div')
	})

	it('should have a className attribute', () => {
		const renderedComponent = shallow(<ContentWrapper />)
		expect(renderedComponent.find('div').prop('className')).toBeDefined()
	})
})
