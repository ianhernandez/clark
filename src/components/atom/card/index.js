// Card.jsx
import React from 'react';
import classNames from 'classnames';

const cardBase = 'rounded-lg bg-white py-6 px-6 space-y-4'

const cardType = {
	primary: "",
	secondary: ""
	// basic: "bg-white hover:bg-gray-700 text-gray-700",
	// delete: "bg-red-300 hover:bg-red-500 text-white"
};

const cardSize = {
	sm: "px-2.5 py-1.5 text-xs rounded",
	md: "px-3 py-2 text-sm",
	lg: "px-4 py-2 text-sm",
	xl: "px-4 py-2 text-base",
	xxl: "px-6 py-3 text-lg"
}

function Card(props) {

  // uses 'classnames' npm util to join classNames and pass props
	const classProps = props.className ? props.className : ''
  const cardClasses = classNames(cardBase, cardType[props.type], cardSize[props.size], classProps )

  return (
    <div className={cardClasses}>{props.children}</div>
  )
}
export default Card;