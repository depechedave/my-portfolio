import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"

const ProjectsHome = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes
  return (
    <>
      <h1>Projects</h1>
      <div className="max-w-2xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8 mt-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-12">
            {projects.map(project => (
              <Link
                to={"/projects/" + project.frontmatter.slug}
                key={project.id}
              >
                <div>
                  <div className="relative -z-10 w-72 h-72 sm:w-60 sm:h-64 rounded-md overflow-hidden hover:opacity-90">
                    <GatsbyImage
                      image={
                        project.frontmatter.thumb.childImageSharp
                          .gatsbyImageData
                      }
                      alt={project.frontmatter.title}
                      className="w-72 h-72 sm:w-60 sm:h-64 object-fill"
                    />
                  </div>
                  <div className="mt-2">
                    <h3>{project.frontmatter.title}</h3>
                    <p>{project.frontmatter.stack}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        
      </div>
    </>
  )
}

ProjectsHome.Layout = Layout
export default ProjectsHome

// export page query

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title         
          slug
          stack
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
  }
`
