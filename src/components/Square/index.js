import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'

const Square = ({ value, onClick }) => (
	<Button onClick={onClick} square top={-2} right={-2}>
		{value}
	</Button>
)

Square.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onClick: PropTypes.func.isRequired
}

export default Square
