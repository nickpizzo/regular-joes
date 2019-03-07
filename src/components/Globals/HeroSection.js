import BackgroundImage from "gatsby-background-image"
import React from "react"

export default function HeroSection({ img, styleClass, title, children }) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

HeroSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
