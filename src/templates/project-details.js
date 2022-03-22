import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function projectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <h1>{title}</h1>
      <section>
        <h2>{stack}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
      }
    }
  }
`
