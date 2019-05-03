import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Blog/Post"

const BlogPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <div className="blog-page-wrap">
      <div className="container">
        <StaticQuery
          query={blogQuery}
          render={data => {
            return (
              <div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Post
                    id={node.id}
                    title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    path={node.frontmatter.path}
                    date={node.frontmatter.date}
                    body={node.excerpt}
                  />
                ))}
              </div>
            )
          }}
        />
      </div>
    </div>
  </Layout>
)

const blogQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(posts)/.*.md$/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            path
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage
