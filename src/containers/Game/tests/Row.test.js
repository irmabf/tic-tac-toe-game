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

	it('should adopt a valid attribute', () => {
		const id = 'test'
		const renderedComponent = shallow(<Row id={id} />)
		expect(renderedComponent.prop('id')).toEqual(id)
	})

	it('should not adopt an invalid attribute', () => {
		const renderedComponent = shallow(<Row attribute={'test'} />)
		expect(renderedComponent.prop('attribute')).toBeUndefined()
	})
})
