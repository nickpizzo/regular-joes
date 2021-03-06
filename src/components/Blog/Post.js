import React from "react"
import { Link } from "gatsby"
import {
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Badge,
} from "reactstrap"
import Img from "gatsby-image"
import slugify from "../../util/utilityFunctions"

const Post = ({ title, author, slug, date, body, fluid, tags }) => {
  return (
    <Card>
      <Link to={"/blog/" + slug}>
        <Img className="card-image-top" fluid={fluid} />
      </Link>
      <CardBody>
        <CardTitle>
          <Link to={"/blog/" + slug}>
            <h5>{title}</h5>
          </Link>
        </CardTitle>
        <CardSubtitle>
          <span>{date}</span>
          <span>By:&nbsp;{author}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <ul className="post-tags">
          {tags.map(tag => (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge className="text-uppercase" color="primary">
                  {tag}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to={"/blog/" + slug}
          className="btn btn-outline-primary float-right"
        >
          Read More
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
