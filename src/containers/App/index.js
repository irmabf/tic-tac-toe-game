import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import HomePage from 'containers/HomePage/Loadable'

const AppWrapper = styled.div`
	min-height: 100%;
	display: flex;
	flex-direction: column;
`

export default function App() {
	return (
		<AppWrapper>
			<Switch>
				<Route exact path='/' component={HomePage} />
			</Switch>
		</AppWrapper>
	)
}
