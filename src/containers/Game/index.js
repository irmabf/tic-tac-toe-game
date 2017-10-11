import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import H2 from 'components/H2'
import Button from 'components/Button'
import Square from 'components/Square'
import { actions } from '../../ducks/game'
import Row from './Row'
import messages from './messages'


class Game extends Component {
	getTurn() {
		const { onePlayer, firstPlayerTurn } = this.props
		return (
			onePlayer ? (
				<H2>
					<FormattedMessage
						{...messages.turn}
						values={{ who: <b>
							{firstPlayerTurn ? messages.your.defaultMessage : messages.computer.defaultMessage}
						</b> }}
					/>
				</H2>
			) : (
				<H2>
					<FormattedMessage
						{...messages.turn}
						values={{ who: <b>{this.currentPlayer(firstPlayerTurn)}</b> }}
					/>
				</H2>
			)
		)
	}

	getInfoMessage() {
		const { step, firstPlayerTurn } = this.props
		let message
		switch (step) {
			case 4:
				message = (
					<H2>
						<FormattedMessage
							{...messages.theWinneIs}
							values={{ winner: this.currentPlayer(!firstPlayerTurn) }}
						/>
					</H2>
				)
				break
			case 5:
				message = (
					<H2>
						<FormattedMessage {...messages.draw} />
					</H2>
				)
				break
			default:
				message = this.getTurn()
		}
		return message
	}

	isWinner(squares) {
		const lines = [
			// horizontal
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],

			// vertical
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],

			// diagonal
			[0, 4, 8],
			[2, 4, 6],
		]
		for (let i = 0; i < lines.length; i += 1) {
			const [a, b, c] = lines[i]
			if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
				return true
			}
		}
		return false
	}

	isDraw(squares) {
		return squares.every((item) => Boolean(item))
	}

	currentPlayer(firstPlayerTurn) {
		const { firstPlayerSymbol, secondPlayerSymbol } = this.props
		return firstPlayerTurn ? firstPlayerSymbol : secondPlayerSymbol
	}

	handleClick(i) {
		const {
			squares,
			step,
			handleSetWinner,
			handleSetDraw,
			handleSetSquareVal,
			firstPlayerTurn
		} = this.props

		const newSquares = squares.slice()

		if (newSquares[i] || step === 4) {
			return false
		}

		newSquares[i] = this.currentPlayer(firstPlayerTurn)

		if (this.isWinner(newSquares)) {
			handleSetWinner()
		} else if (this.isDraw(newSquares)) {
			handleSetDraw()
		}

		handleSetSquareVal(newSquares, !firstPlayerTurn)
		return true
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
		const { handleResetGame } = this.props
		return (
			<div>
				{this.getInfoMessage()}
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
				<Button top={20} onClick={() => handleResetGame()}>
					<FormattedMessage {...messages.reset} />
				</Button>
			</div>
		)
	}
}

Game.propTypes = {
	handleResetGame: PropTypes.func.isRequired,
	handleSetSquareVal: PropTypes.func.isRequired,
	handleSetWinner: PropTypes.func.isRequired,
	handleSetDraw: PropTypes.func.isRequired,
	firstPlayerTurn: PropTypes.bool.isRequired,
	firstPlayerSymbol: PropTypes.string.isRequired,
	secondPlayerSymbol: PropTypes.string.isRequired,
	squares: PropTypes.array.isRequired,
	onePlayer: PropTypes.bool.isRequired,
	step: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
	...state
})

const mapDispatchToProps = {
	handleResetGame: actions.resetGame,
	handleSetSquareVal: actions.setSquareVal,
	handleSetWinner: actions.setWinner,
	handleSetDraw: actions.setDraw
}


export default connect(mapStateToProps, mapDispatchToProps)(Game)
