import React from "react"
import Navbar from "./Navbar"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query layoutQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteURL
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {data.site.siteMetadata.title}
          {/* {`${location.pathname}`} */}
        </title>
      </Helmet>
      <Navbar />
      <div className="grid grid-cols-1 items-center text-center mt-16">
        {children}
      </div>
    </>
  )
}
