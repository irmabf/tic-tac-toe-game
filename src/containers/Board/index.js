import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'

import H2 from 'components/H2'
import Button from 'components/Button'
import { actions } from '../../ducks/game'
import BoardContainer from './BoardContainer'
import Actions from './Actions'
import messages from './messages'
import Game from '../Game'

class Board extends Component {

	setGameInfo() {
			const { onePlayer, setFirstPlayerSymbol, setOnePlayer } = this.props
			return (
				!onePlayer ? (
					<div>
						<H2>
							<FormattedMessage {...messages.heading} />
						</H2>
						<Actions>
							<Button onClick={() => setOnePlayer(true)}>
								<FormattedMessage {...messages.onePlayer} />
							</Button>
							<Button onClick={() => setOnePlayer(false)}>
								<FormattedMessage {...messages.twoPlayers} />
							</Button>
						</Actions>
					</div>
				) : (
					<div>
						<H2>
							<FormattedMessage
								{...messages.doYouWantPlay}
								values={{ X: <b>{messages.x.defaultMessage}</b>, Y: <b>{messages.y.defaultMessage}</b>}}
							/>
						</H2>
						<Actions>
							<Button onClick={() => setFirstPlayerSymbol('X')} xo>
								<FormattedMessage {...messages.x} />
							</Button>
							<Button onClick={() => setFirstPlayerSymbol('O')} xo>
								<FormattedMessage {...messages.y} />
							</Button>
						</Actions>
					</div>
				)
			)
	}

	render() {
		const { onePlayer, firstPlayerSymbol, squares } = this.props
		return (
			<BoardContainer>
				{onePlayer && firstPlayerSymbol  ? (<Game squares={squares} />) : (this.setGameInfo(onePlayer))}
			</BoardContainer>
		)
	}
}

const mapStateToProps = (state) => ({
	...state
})

const mapDispatchToProps = {
	setOnePlayer: actions.setOnePlayer,
	setFirstPlayerSymbol: actions.setFirstPlayerSymbol
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
