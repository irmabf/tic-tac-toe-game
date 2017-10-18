import React from 'react'
import PropTypes from 'prop-types'
import ContentWrapper from './ContentWrapper'

const Screen = ({ children }) => (
	<ContentWrapper>
		{children}
	</ContentWrapper>
)

Screen.propTypes = {
	children: PropTypes.node.isRequired
}


export default Screen
