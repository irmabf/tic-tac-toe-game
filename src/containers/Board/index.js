import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import H2 from 'components/H2'
import Button from 'components/Button'
import Game from '../Game'
import { actions } from '../../ducks/game'
import BoardContainer from './BoardContainer'
import Status from './Status'
import messages from './messages'

class Board extends Component {

	getContent() {
		const { step } = this.props
		let content
		switch (step) {
			case 1:
				content = (
					<div>
						<H2>
							<FormattedMessage {...messages.heading} />
						</H2>
						<Button onClick={() => this.props.handleSetOnePlayer(true)}>
							<FormattedMessage {...messages.onePlayer} />
						</Button>
						<Button onClick={() => this.props.handleSetOnePlayer(false)}>
							<FormattedMessage {...messages.twoPlayers} />
						</Button>
					</div>
				)
				break
			case 2:
				content = (
					<div>
						<H2>
							<FormattedMessage
								{...messages.doYouWantPlay}
								values={{ X: <b>{messages.x.defaultMessage}</b>, Y: <b>{messages.y.defaultMessage}</b> }}
							/>
						</H2>
						<Button onClick={() => this.props.handleSetFirstPlayerSymbol(messages.x.defaultMessage)} xo>
							<FormattedMessage {...messages.x} />
						</Button>
						<Button onClick={() => this.props.handleSetFirstPlayerSymbol(messages.y.defaultMessage)} xo>
							<FormattedMessage {...messages.y} />
						</Button>
					</div>
				)
				break
			default:
				content = (
					<div>
						<Status {...this.props} />
						<Game computerTurn={() => this.computerTurn()} handleClick={() => this.handleClick()} />
						<Button top={20} onClick={() => this.props.handleResetGame()}>
							<FormattedMessage {...messages.reset} />
						</Button>
					</div>
				)
		}
		return content
	}

	render() {
		return (
			<BoardContainer>
				{this.getContent()}
			</BoardContainer>
		)
	}
}

Board.propTypes = {
	handleSetFirstPlayerSymbol: PropTypes.func.isRequired,
	handleSetOnePlayer: PropTypes.func.isRequired,
	handleResetGame: PropTypes.func.isRequired,
	step: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
	...state
})

const mapDispatchToProps = {
	handleSetOnePlayer: actions.setOnePlayer,
	handleSetFirstPlayerSymbol: actions.setFirstPlayerSymbol,
	handleResetGame: actions.resetGame
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
