/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import "bootstrap/dist/css/bootstrap.css"
import PropTypes from "prop-types"
import React from "react"
import "./bootstrap.min.css"
import Footer from "./Globals/Footer"
import Navbar from "./Globals/Navbar"

const Layout = ({ children }) => (
  <>
    <Navbar />

    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
