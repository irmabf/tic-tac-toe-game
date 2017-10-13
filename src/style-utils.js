

/**
 * @description Returns margin with properties: top,right, bottom, left, depending of the value
 * @param {number} top
 * @param {number} right
 * @param {number} left
 * @param {number} bottom
 */

export function margin(top = 0, right = 0, bottom = 0, left = 0) {
	return `
    margin: ${top}px ${right}px ${bottom}px ${left}px;
  `
}


/**
 * @description Returns a function that forces the element to self-clear its children
 */
export const clearfix = () => (`
	&:before, &:after {
		content: '';
    display: table;
    width: 100%;
    position: relative
	}
`)

/**
 * @description Returns a function that forces the element to have a full height
 */
export const fullHeight = () => (`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
`)
