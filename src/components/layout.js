/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import "./bootstrap.min.css"
import Navbar from "./Globals/Navbar"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Navbar />

    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
