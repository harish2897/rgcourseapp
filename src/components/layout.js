/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Footer from './Reuseable/Footer'
import Navbar from "./Reuseable/Navbar"

// import Header from "./header"
import "./bootstrap.min.css" 
import "./layout.css"

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
//       {/* <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       > */}
//       <div>
//         <main>{children}</main>
//         {/* <footer
//           style={{
//             marginTop: `2rem`,
//           }}
//         >
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.com">Gatsby</a>
//         </footer> */}
//       </div>
//     </>
//   )
// }

const Layout = ({children}) =>(
  <>
  <Navbar/>
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
