import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Square from 'components/Square'
import Row from './Row'


class Game extends Component {
	handleClick(i) {
		console.log(i)
	}

	renderSquare(i) {
		const { squares } = this.props
		return (
			<Square
				value={squares[i]}
				onClick={() => this.handleClick(i)}
			/>
		)
	}

	render() {
		return (
			<div>
				<Row>
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</Row>
				<Row>
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</Row>
				<Row>
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</Row>
			</div>
		)
	}
}

Game.propTypes = {
	squares: PropTypes.array.isRequired,
}

export default Game
