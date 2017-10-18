import React from 'preact-compat'
import shallow from 'enzyme/shallow'
import Route from 'react-router-dom/Route'

import App from '../index'

describe('<App />', () => {
	it('should render some routes', () => {
		const renderedComponent = shallow(
			<App />
    )
		expect(renderedComponent.find(Route).length).not.toBe(0)
	})
})
