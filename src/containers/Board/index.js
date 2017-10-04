import React, { PureComponent } from 'react'
import { FormattedMessage } from 'react-intl'

import H2 from 'components/H2'
import Button from 'components/Button'
import Game from '../Game'
import BoardContainer from './BoardContainer'
import Actions from './Actions'
import messages from './messages'

class Board extends PureComponent { // eslint-disable-line
	render() {
		return (
			<BoardContainer className='container'>
				<H2>
					<FormattedMessage {...messages.heading} />
				</H2>
				<Actions>
					<Button>
						<FormattedMessage {...messages.onePlayer} />
					</Button>
					<Button>
						<FormattedMessage {...messages.twoPlayers} />
					</Button>
				</Actions>
				<Game />
			</BoardContainer>
		)
	}
}

export default Board
