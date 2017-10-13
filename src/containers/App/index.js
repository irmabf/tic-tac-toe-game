import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import Screen from 'components/Screen'
import HomePage from 'containers/HomePage/Loadable'

const AppWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
`

export default function App() {
	return (
		<AppWrapper>
			<Screen>
				<Switch>
					<Route exact path='/' component={HomePage} />
				</Switch>
			</Screen>
		</AppWrapper>
	)
}
