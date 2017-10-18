import React from 'preact-compat'
import mount from 'enzyme/mount'
import Button from 'components/Button'

import Square from '../index'

const value = Math.floor(Math.random() * 10)
const onClickSpy = jest.fn()
const renderComponent = (props = {}) => mount(
	<Square
		value={value}
		{...props}
	/>
)


describe('<Square />', () => {
	it('should have a value attribute', () => {
		const renderedComponent = renderComponent({ onClick: onClickSpy })
		expect(renderedComponent.prop('value')).toBeDefined()
	})

	it('should handle click events', () => {
		const renderedComponent = renderComponent({ onClick: onClickSpy })
		renderedComponent.find('a').simulate('click')
		expect(onClickSpy).toHaveBeenCalled()
	})

	it('should render the component Button', () => {
		const renderedComponent = renderComponent({ onClick: onClickSpy })
		expect(renderedComponent.find(Button).length).toEqual(1)
	})

	it('The returned Button should have a top attribute -2', () => {
		const renderedComponent = renderComponent({ onClick: onClickSpy })
		expect(renderedComponent.find(Button).props().top).toEqual(-2)
	})

	it('The returned Button should have a right attribute -2', () => {
		const renderedComponent = renderComponent({ onClick: onClickSpy })
		expect(renderedComponent.find(Button).props().right).toEqual(-2)
	})

	it('The returned Button should have a square attribute', () => {
		const renderedComponent = renderComponent({ onClick: onClickSpy })
		expect(renderedComponent.find(Button).props().square).toEqual(true)
	})
})
