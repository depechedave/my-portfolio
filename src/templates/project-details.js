import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"

export default function projectDetails({ data }) {
  const { title, stack, gallery } = data.markdownRemark.frontmatter
  const { features } = data.markdownRemark.frontmatter.holding

  return (
    <Layout>
      <div className="">
        <div className="max-w-2xl mx-auto pb-12 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-6xl">
              {title}
            </h1>
            <h2 className="mt-4">{stack}</h2>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map(feature => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <h3 className="font-medium">{feature.name}</h3>
                  <p className="mt-2 text-sm">{feature.desc}</p>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            {gallery.map(img => (
              <GatsbyImage
                image={img.childImageSharp.gatsbyImageData}
                alt="text"
                className="bg-gray-100 rounded-lg object-cover w-full h-72 relative -z-10"
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query projectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        holding {
          features {
            desc
            name
          }
        }
        stack
        title
        gallery {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`
