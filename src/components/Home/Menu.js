import React, { useState } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

export default function Menu(props) {
  const [items, setItems] = useState(props.items.edges)
  return (
    <section className="menu py-5">
      <div className="container">
        <Title title="Best of Our Menu" />
        {items ? <div>there are items</div> : <div>no items</div>}
      </div>
    </section>
  )
}
