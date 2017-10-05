import { css } from 'styled-components'

const buttonStyles = css`
	position: relative;
	cursor: pointer;
	display: inline-block;
	transition: all 150ms;
	border: 2px solid transparent;
	border-radius: 3px;
	min-height: 33px;
	padding: 2px 18px;
	line-height: 30px;
	font-size: 30px;
	font-weight: 600;
	text-decoration: none;
	text-align: center;
	align-items: flex-start;
	user-select: none;
	white-space: nowrap;
	color: #444444;
	
	&:focus {
		outline: none;
	}
	
	&:hover {
		border: 2px solid palevioletred;
	}
	
	&:after {
		content: '';
		display: block;
		background: transparent;
		transition: all 150ms;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
	}
	${(props) => props.xo && `
		&:hover {
			border-color: transparent;
			border-bottom: 2px solid palevioletred;
		}
	`}
	
	${(props) => props.square && `
		border: 2px solid #999;
		border-radius: 0;
		float: left;
		min-width: 140px;
		min-height: 50px;
		margin-right: -2px;
		margin-top: -2px;
		
		&:hover {
			z-index: 999
		}
	`}

`

export default buttonStyles
