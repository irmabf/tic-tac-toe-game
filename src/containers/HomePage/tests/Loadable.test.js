import React from 'preact-compat'
import renderer from 'react-test-renderer'

import Loadable from '../Loadable'

describe('<Loadable />', () => {
	it('<Loadable /> renders correctly', () => {
		const tree = renderer.create(<Loadable />).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
