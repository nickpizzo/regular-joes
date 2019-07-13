import React from "react"
import Layout from "../components/layout"
import Post from "../components/Blog/Post"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Col, Row } from "reactstrap"
import Sidebar from "../components/Blog/Sidebar"

export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(posts)/.*.md$/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 650, maxHeight: 371) {
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

const PostList = props => {
  const posts = props.data.allMarkdownRemark.edges
  const { currentPage } = props.pageContext

  return (
    <Layout>
      <SEO
        title={`Blog Page: ${currentPage}`}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <div className="blog-page-wrap">
        <div className="container">
          <Row>
            <Col md="8">
              {posts.map(({ node }) => (
                <Post
                  key={node.id}
                  slug={node.fields.slug}
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  date={node.frontmatter.date}
                  body={node.excerpt}
                  tags={node.frontmatter.tags}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
              ))}
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

export default PostList
