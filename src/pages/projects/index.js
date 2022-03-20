import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"

const ProjectsHome = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes
  return (
    <>
      <h1>Projects</h1>
      <div className="max-w-2xl mx-auto py-2 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {projects.map(project => (
              <Link
                to={"/projects/" + project.frontmatter.slug}
                key={project.id}
              >
                <div>
                  <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={project.frontmatter.imgSrc}
                      alt={project.frontmatter.title}
                      className=""
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
          imgSrc
          url
        }
        id
      }
    }
  }
`
