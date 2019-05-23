import React from "react"
import Layout from "../components/layout"
import Sidebar from "../components/Blog/Sidebar"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { Card, CardBody, Badge, CardSubtitle, Row, Col } from "reactstrap"
import Img from "gatsby-image"
import slugify from "../util/utilityFunctions"
import authors from "../util/authors"

export const postQuery = graphql`
  query blogPostBySlug($slug: String!, $imageUrl: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
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

export default function SinglePost({ data }) {
  const post = data.markdownRemark.frontmatter
  const author = authors.find(x => x.name === post.author)
  return (
    <Layout>
      <SEO title={post.title} />
      <div className="blog-page-wrap">
        <div className="container">
          <Row>
            <Col md="8">
              <Card>
                <h2>{post.title}</h2>
                <Img
                  className="card-image-top"
                  fluid={post.image.childImageSharp.fluid}
                />
                <CardBody>
                  <CardSubtitle>
                    <span className="text-info">{post.date}</span> by{" "}
                    <span className="text-info">{post.author}</span>
                  </CardSubtitle>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.markdownRemark.html,
                    }}
                  />
                  <ul className="post-tags">
                    {post.tags.map(tag => (
                      <li key={tag}>
                        <Link to={`/tag/${slugify(tag)}`}>
                          <Badge color="primary">{tag}</Badge>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
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
