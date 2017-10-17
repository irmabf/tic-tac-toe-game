import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Square from 'components/Square'
import { actions } from '../../ducks/game'
import Row from './Row'

class Game extends Component {

	isDraw(squares) {
		return squares.every((item) => Boolean(item))
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

	isWinnerOrDraw(squares) {
		const { handleSetWinner, handleSetDraw } = this.props
		let result = false

		if (this.isWinner(squares)) {
			result = handleSetWinner()
		} else if (this.isDraw(squares)) {
			result = handleSetDraw()
		}

		return result
	}

	computerTurn() {
		const { squares, step, currentPlayer, secondPlayerSymbol, handleSetSquareVal } = this.props
		const newSquares = squares.slice()

		if (step === 4 || step === 5 || currentPlayer !== secondPlayerSymbol) {
			return false
		}

		const computerChoice = this.miniMax(newSquares)
		newSquares[computerChoice] = currentPlayer

		this.isWinnerOrDraw(newSquares)

		return handleSetSquareVal(newSquares)
	}

	miniMax(squares) {
		const { firstPlayerSymbol, secondPlayerSymbol } = this.props
		const possibleMoves = []

		squares.filter((item, i) => !item ? possibleMoves.push(i) : null)


		const bestChoice = possibleMoves.map((move) => {
			let score = -10
			const nextMove = squares.slice(0)

			nextMove[move] = secondPlayerSymbol

			if (this.isWinner(nextMove)) {
				score = 10
			} else {
				nextMove[move] = firstPlayerSymbol
				if (this.isWinner(nextMove)) {
					score = 0
				}
			}

			return { score, square: move }
		})

		const items = bestChoice.reduce((acc, val) => {
			if (!acc.length || val.score > acc[0].score) return [val]
			if (val.score === acc[0].score) return acc.concat(val)
			return acc
		}, [])

		return items[Math.floor(Math.random() * items.length)].square
	}

	handleClick(i) {
		const { squares, step, handleSetSquareVal, currentPlayer, firstPlayerSymbol, onePlayer } = this.props

		const newSquares = squares.slice()

		if (newSquares[i] || step === 4 || step === 5 || (onePlayer && currentPlayer !== firstPlayerSymbol)) {
			return false
		}

		newSquares[i] = currentPlayer

		this.isWinnerOrDraw(newSquares)

		return handleSetSquareVal(newSquares)
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
		const { onePlayer, currentPlayer, secondPlayerSymbol } = this.props
		if (onePlayer && currentPlayer === secondPlayerSymbol) {
			setTimeout(() => this.computerTurn(), 1000)
		}
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
	currentPlayer: PropTypes.string.isRequired,
	onePlayer: PropTypes.bool.isRequired,
	firstPlayerSymbol: PropTypes.string.isRequired,
	secondPlayerSymbol: PropTypes.string.isRequired,
	handleSetSquareVal: PropTypes.func.isRequired,
	handleSetWinner: PropTypes.func.isRequired,
	handleSetDraw: PropTypes.func.isRequired,
	step: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
	...state.game
})

const mapDispatchToProps = {
	handleSetOnePlayer: actions.setOnePlayer,
	handleSetFirstPlayerSymbol: actions.setFirstPlayerSymbol,
	handleResetGame: actions.resetGame,
	handleSetSquareVal: actions.setSquareVal,
	handleSetWinner: actions.setWinner,
	handleSetDraw: actions.setDraw,
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
