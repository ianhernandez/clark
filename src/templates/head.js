import * as React from 'react'
import {Helmet} from 'react-helmet'
import PropTypes from 'prop-types'


function Head({ description, lang, meta, title}) {
  return (
    <Helmet>
    
		</Helmet>
  )
}

Head.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Head