/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { PureComponent } from 'react'
import { FormattedMessage } from 'react-intl'

import H1 from 'components/H1'
import messages from './messages'
import Board from '../Board'

export class HomePage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
	render() {
		return (
			<div>
				<H1>
					<FormattedMessage {...messages.heading} />
				</H1>
				<Board />
			</div>
		)
	}
}

export default HomePage
