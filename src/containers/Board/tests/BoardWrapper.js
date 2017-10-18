import React from 'react'
import shallow from 'enzyme/shallow'

import BoardWrapper from '../BoardWrapper'

describe('<BoardWrapper />', () => {
	it('should render an <div> tag', () => {
		const renderedComponent = shallow(<BoardWrapper />)
		expect(renderedComponent.type()).toEqual('div')
	})

	it('should have a className attribute', () => {
		const renderedComponent = shallow(<BoardWrapper />)
		expect(renderedComponent.find('div').prop('className')).toBeDefined()
	})
})
