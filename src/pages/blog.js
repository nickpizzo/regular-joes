import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Blog/Post"
import Sidebar from "../components/Blog/Sidebar"
import { Col, Row } from "reactstrap"
import PaginationBlock from "../components/PaginationBlock"

const blogQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(posts)/.*.md$/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 750) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

const BlogPage = () => {
  const postsPerPage = 2
  let numberOfPages

  return (
    <Layout>
      <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
      <div className="blog-page-wrap">
        <div className="container">
          <Row>
            <Col md="8">
              <StaticQuery
                query={blogQuery}
                render={data => {
                  numberOfPages = Math.ceil(
                    data.allMarkdownRemark.totalCount / postsPerPage
                  )
                  return (
                    <div>
                      {data.allMarkdownRemark.edges.map(({ node }) => (
                        <Post
                          key={node.id}
                          title={node.frontmatter.title}
                          author={node.frontmatter.author}
                          slug={node.fields.slug}
                          date={node.frontmatter.date}
                          body={node.excerpt}
                          fluid={node.frontmatter.image.childImageSharp.fluid}
                          tags={node.frontmatter.tags}
                        />
                      ))}
                      <PaginationBlock
                        currentPage={1}
                        numberOfPages={numberOfPages}
                      />
                    </div>
                  )
                }}
              />
            </Col>

            <Col md="4">
              <Sidebar />
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
