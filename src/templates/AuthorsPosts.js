import React from "react"
import Layout from "../components/layout"
import Post from "../components/Blog/Post"
import { graphql } from "gatsby"
import authors from "../util/authors"
import SEO from "../components/seo"
import { Row, Col } from "reactstrap"
import Sidebar from "../components/Blog/Sidebar"

const AuthorsPosts = ({ data, pageContext }) => {
  const { totalCount } = data.allMarkdownRemark
  const author = authors.find(x => x.name === pageContext.authorName)
  console.log(pageContext.authorName)
  const pageHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} by ${
    author.name
  }`

  return (
    <Layout>
      <SEO title={pageHeader} />
      <div className="blog-page-wrap">
        <div className="container">
          <Row>
            <Col md="8">
              <h2 className="text-center">{pageHeader}</h2>
              {data.allMarkdownRemark.edges.map(({ node }) => (
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
              <Sidebar
                author={author}
                authorImageFluid={data.file.childImageSharp.fluid}
              />
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export const authorQuery = graphql`
  query($authorName: String!, $imageUrl: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { eq: $authorName } } }
    ) {
      totalCount
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
                fluid(maxWidth: 650) {
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
    file(relativePath: { eq: $imageUrl }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AuthorsPosts
