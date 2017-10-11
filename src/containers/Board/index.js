import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import H2 from 'components/H2'
import Button from 'components/Button'
import { actions } from '../../ducks/game'
import BoardContainer from './BoardContainer'
import Actions from './Actions'
import messages from './messages'
import Game from '../Game'

class Board extends Component {

	setGameInfo() {
		const { step, setFirstPlayerSymbol, setOnePlayer } = this.props
		return (
				step === 1 ? (
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
								values={{ X: <b>{messages.x.defaultMessage}</b>, Y: <b>{messages.y.defaultMessage}</b> }}
							/>
						</H2>
						<Actions>
							<Button onClick={() => setFirstPlayerSymbol(messages.x.defaultMessage)} xo>
								<FormattedMessage {...messages.x} />
							</Button>
							<Button onClick={() => setFirstPlayerSymbol(messages.y.defaultMessage)} xo>
								<FormattedMessage {...messages.y} />
							</Button>
						</Actions>
					</div>
				)
		)
	}

	render() {
		const { step } = this.props
		return (
			<BoardContainer>
				{step > 2 ? (<Game />) : (this.setGameInfo())}
			</BoardContainer>
		)
	}
}

Board.propTypes = {
	step: PropTypes.number.isRequired,
	setFirstPlayerSymbol: PropTypes.func.isRequired,
	setOnePlayer: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	...state
})

const mapDispatchToProps = {
	setOnePlayer: actions.setOnePlayer,
	setFirstPlayerSymbol: actions.setFirstPlayerSymbol
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
