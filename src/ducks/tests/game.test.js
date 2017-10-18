import reducer, { actions } from '../game'

describe('Game actions', () => {
	describe('setOnePlayer Action', () => {
		it('has a type of SET_ONE_PLAYER', () => {
			const expected = {
				type: actions.SET_ONE_PLAYER,
				payload: { bool: true }
			}
			expect(actions.setOnePlayer(true)).toEqual(expected)
		})
	})

	describe('setFirstPlayerSymbol Action', () => {
		it('has a type of SET_FIRST_PLAYER_SYMBOL', () => {
			const expected = {
				type: actions.SET_FIRST_PLAYER_SYMBOL,
				payload: { symbol: 'X' }
			}
			expect(actions.setFirstPlayerSymbol('X')).toEqual(expected)
		})
	})

	describe('setSquareVal Action', () => {
		it('has a type of SET_SQUARE_VAL', () => {
			const expected = {
				type: actions.SET_SQUARE_VAL,
				payload: { squares: [null, null, 'X', null, null, null, null, null, null] }
			}
			expect(actions.setSquareVal([null, null, 'X', null, null, null, null, null, null])).toEqual(expected)
		})
	})

	describe('resetGame Action', () => {
		it('has a type of RESET', () => {
			const expected = {
				type: actions.RESET
			}
			expect(actions.resetGame()).toEqual(expected)
		})
	})

	describe('setWinner Action', () => {
		it('has a type of SET_WINNER', () => {
			const expected = {
				type: actions.SET_WINNER
			}
			expect(actions.setWinner()).toEqual(expected)
		})
	})

	describe('setDraw Action', () => {
		it('has a type of SET_DRAW', () => {
			const expected = {
				type: actions.SET_DRAW
			}
			expect(actions.setDraw()).toEqual(expected)
		})
	})
})

describe('Game Reducer', () => {
	it('returns the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			onePlayer: true,
			squares: Array(9).fill(null),
			firstPlayerSymbol: '',
			secondPlayerSymbol: '',
			currentPlayer: '',
			step: 1
		})
	})

	it('set One Player', () => {
		expect(reducer(undefined, { type: actions.SET_ONE_PLAYER, payload: { bool: false } })).toEqual({
			onePlayer: false,
			squares: Array(9).fill(null),
			firstPlayerSymbol: '',
			secondPlayerSymbol: '',
			currentPlayer: '',
			step: 2
		})
	})

	it('set First Player Symbol', () => {
		expect(reducer(undefined, { type: actions.SET_FIRST_PLAYER_SYMBOL, payload: { symbol: 'Y' } })).toEqual({
			onePlayer: true,
			squares: Array(9).fill(null),
			firstPlayerSymbol: 'Y',
			secondPlayerSymbol: 'X',
			currentPlayer: 'X',
			step: 3
		})
	})

	it('set Square Val', () => {
		const initialState = {
			onePlayer: true,
			squares: Array(9).fill(null),
			firstPlayerSymbol: 'Y',
			secondPlayerSymbol: 'X',
			currentPlayer: 'X',
			step: 3
		}
		expect(reducer(initialState, { type: actions.SET_SQUARE_VAL, payload: { squares: [null, null, 'X', null, null, null, null, null, null] } })).toEqual({
			onePlayer: true,
			squares: [null, null, 'X', null, null, null, null, null, null],
			firstPlayerSymbol: 'Y',
			secondPlayerSymbol: 'X',
			currentPlayer: 'Y',
			step: 3
		})
	})

	it('Reset Game', () => {
		expect(reducer(undefined, { type: actions.RESET })).toEqual({
			onePlayer: true,
			squares: Array(9).fill(null),
			firstPlayerSymbol: '',
			secondPlayerSymbol: '',
			currentPlayer: '',
			step: 1
		})
	})

	it('Set Winner', () => {
		const initialState = {
			onePlayer: false,
			squares: ['X', 'X', 'X', 'Y', 'Y', null, null, null, null],
			firstPlayerSymbol: 'Y',
			secondPlayerSymbol: 'X',
			currentPlayer: 'X',
			step: 3
		}
		expect(reducer(initialState, { type: actions.SET_WINNER })).toEqual({
			onePlayer: false,
			squares: ['X', 'X', 'X', 'Y', 'Y', null, null, null, null],
			firstPlayerSymbol: 'Y',
			secondPlayerSymbol: 'X',
			currentPlayer: 'X',
			step: 4
		})
	})

	it('Set Draw', () => {
		const initialState = {
			onePlayer: false,
			squares: ['X', 'Y', 'X', 'X', 'X', 'Y', 'Y', 'X', 'Y'],
			firstPlayerSymbol: 'Y',
			secondPlayerSymbol: 'X',
			currentPlayer: 'X',
			step: 3
		}
		expect(reducer(initialState, { type: actions.SET_DRAW })).toEqual({
			onePlayer: false,
			squares: ['X', 'Y', 'X', 'X', 'X', 'Y', 'Y', 'X', 'Y'],
			firstPlayerSymbol: 'Y',
			secondPlayerSymbol: 'X',
			currentPlayer: 'X',
			step: 5
		})
	})
})
