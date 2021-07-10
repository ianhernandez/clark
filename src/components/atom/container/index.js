import React from 'react'
import classNames from 'classnames'

const containerBase = 'px-4 md:p-6'

const containerType = {
	padded: "p-4 md:p-6 xl:max-w-8xl mx-auto",
	secondary: ""
};

const Container = (props) => {
	const classProps = props.className ? props.className : undefined
	const style = props.style ? props.style : undefined
	const containerClasses = classNames(containerBase, containerType[props.type], classProps )
	return (
		<div style={style} className={containerClasses}>{props.children}</div>
	)
}
 
export default Container;
