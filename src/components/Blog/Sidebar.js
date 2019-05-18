import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { Card, CardTitle, CardBody, Form, FormGroup, Input } from "reactstrap"

const sidebarQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(posts)/.*.md$/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const Sidebar = () => (
  <div>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Newsletter
        </CardTitle>
        <Form className="text-center">
          <FormGroup>
            <Input type="email" placeholder="Your email" />
          </FormGroup>
          <button className="btn btn-outline-primary">Subscribe</button>
        </Form>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Advertisement
        </CardTitle>
        <img
          src="https://via.placeholder.com/320X200"
          alt="advert"
          style={{ width: "100%" }}
        />
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Recent Posts
        </CardTitle>

        <StaticQuery
          query={sidebarQuery}
          render={data => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card key={node.id}>
                  <Link to={node.fields.slug}>
                    <Img
                      className="card-image-top"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                  </Link>
                  <CardBody>
                    <CardTitle>
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link>
                    </CardTitle>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        />
      </CardBody>
    </Card>
  </div>
)

export default Sidebar
