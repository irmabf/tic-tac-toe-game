import React from 'react'
import { shallow } from 'enzyme'

import Row from '../Row'

describe('<Row />', () => {
	it('should render an <div> tag', () => {
		const renderedComponent = shallow(<Row />)
		expect(renderedComponent.type()).toEqual('div')
	})

	it('should have a className attribute', () => {
		const renderedComponent = shallow(<Row />)
		expect(renderedComponent.find('div').prop('className')).toBeDefined()
	})
})
