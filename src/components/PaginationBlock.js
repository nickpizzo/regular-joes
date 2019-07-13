import React from "react"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"

const PaginationBlock = ({ currentPage, numberOfPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const previousPage =
    currentPage - 1 === 1
      ? "/blog"
      : "/blog/page/" + (currentPage - 1).toString()
  const nextPage = "/blog/page/" + (currentPage + 1).toString()

  return (
    <Pagination aria-label="Page navigation">
      {isFirst ? (
        <PaginationItem disabled>
          <PaginationLink previous href={previousPage} />
        </PaginationItem>
      ) : (
        <PaginationItem>
          <PaginationLink previous href={previousPage} />
        </PaginationItem>
      )}

      {Array.from({ length: numberOfPages }, (_, i) =>
        currentPage === i + 1 ? (
          <PaginationItem active key={`page-number${i + 1}`}>
            <PaginationLink href={`/blog/${i === 0 ? "" : "page/" + (i + 1)}`}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ) : (
          <PaginationItem key={`page-number${i + 1}`}>
            <PaginationLink href={`/blog/${i === 0 ? "" : "page/" + (i + 1)}`}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        )
      )}

      {isLast ? (
        <PaginationItem disabled>
          <PaginationLink next href={nextPage} />
        </PaginationItem>
      ) : (
        <PaginationItem>
          <PaginationLink next href={nextPage} />
        </PaginationItem>
      )}
    </Pagination>
  )
}

export default PaginationBlock
