import React, { useState, useEffect } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

export default function Menu(props) {
  const [items] = useState(props.items.edges)
  const [filteredItems, setFilteredItems] = useState(props.items.edges)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    let tempItems = items.map(item => {
      return item.node.category
    })
    let tempCategories = new Set(tempItems)
    let categoryFilters = Array.from(tempCategories)
    setCategories(["all", ...categoryFilters])
  }, [props])

  const handleItems = cat => {
    let itemsCopy = [...items]
    if (cat === "all") {
      setFilteredItems(itemsCopy)
    } else {
      let filtered = itemsCopy.filter(({ node }) => node.category === cat)
      setFilteredItems(filtered)
    }
  }

  return (
    <section className="menu py-5">
      <div>{console.log(categories)}</div>
      <div className="container">
        <Title title="Best of Our Menu" />
        {/* categories */}
        <div className="row mb-5">
          <div className="col-10 mx-auto text-center">
            {categories.map((cat, i) => {
              return (
                <button
                  type="button"
                  key={i}
                  className="btn btn-yellow text-capitalize m-3"
                  onClick={() => {
                    handleItems(cat)
                  }}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>
        {/* menu items */}
        <div className="row">
          {filteredItems ? (
            filteredItems.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 my-3 d-flex mx-auto"
                >
                  <div>
                    <Img fixed={node.image.fixed} />
                  </div>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">
                        <small className="text-capitalize">{node.title}</small>
                      </h6>
                      <h6 className="mb-0 text-darker-yellow">${node.price}</h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                  </div>
                </div>
              )
            })
          ) : (
            <div>no items</div>
          )}
        </div>
      </div>
    </section>
  )
}
