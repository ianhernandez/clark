// Button.jsx
import React from 'react'
import classnames from 'classnames'

const ButtonBase = 'inline-flex items-center font-semibold rounded-md leading-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'

const ButtonType = {
	primary: "border border-transparent shadow-sm bg-blue-600 hover:bg-blue-700 text-white",
	ghost: "bg-transparent border-2 border-white text-white"
	// basic: "bg-white hover:bg-gray-700 text-gray-700",
	// delete: "bg-red-300 hover:bg-red-500 text-white"
};

const ButtonSize = {
	sm: "px-2.5 py-1.5 text-xs rounded font-medium",
	md: "px-3 py-2 text-sm",
	lg: "px-4 py-2 text-sm",
	xl: "px-4 py-2 text-base",
	xxl: "px-6 py-3 text-lg"
}

function Button(props) {
	const {size, type, display, children, className, ...rest } = props
	
	const buttonClasses = classnames(
		ButtonBase, 
		type ? ButtonType[type] : null, 
		size ? ButtonSize[size] : null, 
		className
		)

  return (
    <button className={buttonClasses} {...rest}>{children}</button>
  )
}
export default Button;