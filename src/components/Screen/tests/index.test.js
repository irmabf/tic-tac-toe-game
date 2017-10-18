import React from 'react'
import mount from 'enzyme/mount'

import Screen from '../index'

const children = (<h1>Test</h1>)
const renderComponent = () => mount(
	<Screen>{children}</Screen>
)

describe('<Screen />', () => {
	it('should render an <div> tag ', () => {
		const renderedComponent = renderComponent()
		expect(renderedComponent.find('div').length).toEqual(1)
	})

	it('should have children', () => {
		const renderedComponent = renderComponent()
		expect(renderedComponent.contains(children)).toEqual(true)
	})
})
