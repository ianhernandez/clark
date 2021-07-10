import * as React from "react"
import PropTypes from "prop-types"
import Page from "./page"

const PageBasic = ({ children }) => {
  return (
    <>
      <Page>
      	{children}
			</Page>
    </>
  )
}

PageBasic.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageBasic