import React from "react"
const Layout = require("./src/components/Layout").default

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
