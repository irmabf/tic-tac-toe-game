/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react'
import PropTypes from 'prop-types'

import A from './A'
import StyledButton from './StyledButton'

function Button({
	xo = false,
	square = false,
	top = 0,
	bottom = 0,
	left = 0,
	right = 0,
	...props
}) {
	// Render an anchor tag
	let button = (
		<A href={props.href} onClick={props.onClick} {...{ xo, square, top, bottom, left, right }}>
			{Children.toArray(props.children)}
		</A>
	)

	// If the Button has a handleRoute prop, we want to render a button
	if (props.handleRoute) {
		button = (
			<StyledButton onClick={props.handleRoute} {...{ xo, square, top, bottom, left, right }}>
				{Children.toArray(props.children)}
			</StyledButton>
		)
	}

	return (button)
}

Button.propTypes = {
	handleRoute: PropTypes.func,
	href: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.node,
	xo: PropTypes.bool,
	square: PropTypes.bool,
	top: PropTypes.number,
	bottom: PropTypes.number,
	left: PropTypes.number,
	right: PropTypes.number
}

export default Button
