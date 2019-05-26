import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Badge, Button, Row, Col } from "reactstrap"
import slugify from "../util/utilityFunctions"
import Sidebar from "../components/Blog/Sidebar"

export default function TagsPage({ pageContext }) {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout pageTitle="All Tags">
      <SEO title="All Tags" keywords={["tags", "topics"]} />
      <div className="tags-page-wrap">
        <div className="container">
          <Row>
            <Col md="8">
              <h2 className="text-center">All Tags</h2>
              <ul className="all-tags">
                {tags.map(tag => (
                  <li key={tag} style={{ marginBottom: "10px" }}>
                    <Button color="primary" href={`/tag/${slugify(tag)}`}>
                      {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
                    </Button>
                  </li>
                ))}
              </ul>
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
