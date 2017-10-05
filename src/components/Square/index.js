import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'

const Square = ({ value, onClick }) => (
	<Button onClick={onClick} square>
		{value}
	</Button>
)

Square.propTypes = {
	value: PropTypes.string,
	onClick: PropTypes.func.isRequired
}

export default Square
