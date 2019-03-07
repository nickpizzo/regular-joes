import { Link } from "gatsby"
import React from "react"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Sed sed erat eleifend, malesuada nibh id, gravida purus. Phasellus
              arcu turpis, pulvinar sed nunc id, ultricies rhoncus tellus.
              Integer luctus nibh ac congue cursus. In iaculis sagittis tellus
              sed efficitur. Cras pharetra, tortor in gravida finibus, erat
              tellus porta diam, nec condimentum mi turpis nec magna. Donec nec
              enim sollicitudin, tincidunt dolor eget, consectetur urna.
              Phasellus in pellentesque felis. Nulla eleifend tellus quis urna
              posuere suscipit. In tristique magna in arcu lobortis, sit amet
              vehicula nisl gravida. Donec id lorem purus. Pellentesque eget dui
              hendrerit, eleifend sem et, ornare velit. Praesent ligula lacus,
              sodales accumsan tincidunt sed, malesuada in felis.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
