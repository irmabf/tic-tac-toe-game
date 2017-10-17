const initialState = {
	onePlayer: true,
	squares: Array(9).fill(null),
	firstPlayerSymbol: '',
	secondPlayerSymbol: '',
	currentPlayer: '',
	step: 1
}

export default function reducer(state = initialState, { payload, type }) {
	switch (type) {
		case actions.SET_ONE_PLAYER:
			return {
				...state,
				onePlayer: payload.bool,
				step: 2
			}
		case actions.SET_FIRST_PLAYER_SYMBOL:
			{
				const secondPlayerSymbol = payload.symbol === 'X' ? 'Y' : 'X'
				return {
					...state,
					firstPlayerSymbol: payload.symbol,
					secondPlayerSymbol,
					currentPlayer: state.onePlayer ? secondPlayerSymbol : payload.symbol,
					step: 3
				}
			}
		case actions.SET_SQUARE_VAL:
			{
				const changePlayer = state.currentPlayer === 'X' ? 'Y' : 'X'
				return {
					...state,
					squares: payload.squares,
					currentPlayer: state.step === 3 ? changePlayer : state.currentPlayer
				}
			}
		case actions.SET_WINNER:
			return { ...state, step: 4 }
		case actions.SET_DRAW:
			return { ...state, step: 5 }
		case actions.RESET:
			return initialState
		default:
			return state
	}
}

export const actions = {
	SET_ONE_PLAYER: 'tic-tac-toe/Game/SET_ONE_PLAYER',
	SET_FIRST_PLAYER_SYMBOL: 'tic-tac-toe/Game/SET_FIRST_PLAYER_SYMBOL',
	SET_SQUARE_VAL: 'tic-tac-toe/Game/SET_SQUARE_VAL',
	SET_WINNER: 'tic-tac-toe/Game/SET_WINNER',
	SET_DRAW: 'tic-tac-toe/Game/SET_DRAW',
	RESET: 'tic-tac-toe/Game/RESET',

	setOnePlayer: (bool) => ({
		type: actions.SET_ONE_PLAYER,
		payload: { bool }
	}),
	setFirstPlayerSymbol: (symbol) => ({
		type: actions.SET_FIRST_PLAYER_SYMBOL,
		payload: { symbol }
	}),
	setSquareVal: (squares) => ({
		type: actions.SET_SQUARE_VAL,
		payload: { squares }
	}),
	resetGame: () => ({
		type: actions.RESET
	}),
	setWinner: () => ({
		type: actions.SET_WINNER
	}),
	setDraw: () => ({
		type: actions.SET_DRAW
	})
}
