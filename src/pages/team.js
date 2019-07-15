import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from "../util/authors"
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap"
import JohnImage from "../images/author1.png"
import JoeImage from "../images/author2.png"
import slugify from "../util/utilityFunctions"
import Sidebar from "../components/Blog/Sidebar"

const TeamPage = () => (
  <Layout pageTitle="Our Team">
    <SEO title="Our Team" keywords={["gatsby", "application", "react"]} />
    <div className="tags-page-wrap">
      <div className="container">
        <Row className="mb-4">
          <Col md="8">
            <Row>
              {/* TODO list all authors programatically */}
              <Col md="4">
                <img src={JohnImage} style={{ maxWidth: "100%" }} />
              </Col>
              <Col md="8">
                <Card style={{ minHeight: "100%" }}>
                  <CardBody>
                    <CardTitle>
                      <b>{authors[0].name}</b>
                    </CardTitle>
                    <CardText>{authors[0].bio}</CardText>
                    <Button
                      className="text"
                      color="primary"
                      href={`/author/${slugify(authors[0].name)}`}
                    >
                      {" "}
                      View Posts
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md="4">
            <Sidebar />
          </Col>
        </Row>
      </div>
    </div>
  </Layout>
)

export default TeamPage
