import React from 'react'

export default function Box(props) {
  return (
		<div style={{backgroundImage: `url('${props.backgroundImage}')`}}>
			{props.children}
		</div>
  )
}
