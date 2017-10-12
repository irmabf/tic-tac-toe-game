import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'

import HomePage from 'containers/HomePage/Loadable'

const AppWrapper = styled.div`
	max-width: calc(768px + 16px * 2);
	margin: 0 auto;
	display: flex;
	min-height: 100%;
	padding: 0 16px;
	flex-direction: column;
`

export default function App() {
	return (
		<AppWrapper>
			<Route exact path='/' component={HomePage} />
		</AppWrapper>
	)
}
