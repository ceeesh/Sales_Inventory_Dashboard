import React from 'react'
import {
    Pagination, PaginationItem, PaginationLink
} from 'reactstrap';

const TablePagination = ({ goToPage, nextPage, prevPage, allProducts, currentIndex, newRecords }) => {
    const records = allProducts.slice(Math.ceil(allProducts.length / 2))
    // console.log(newRecords.length)
    return (
        <Pagination>
            {/* <PaginationItem>
                <PaginationLink
                    first
                    href="#"
                />
            </PaginationItem> */}
            <PaginationItem>
                <PaginationLink
                    href="#"
                    previous onClick={prevPage}
                />
            </PaginationItem>
            {records.map((page, i) => (
                <PaginationItem active={(i + 1) === currentIndex} key={i}>
                    <PaginationLink href="#" onClick={(e) => goToPage(e, i)}>
                        {i + 1}
                    </PaginationLink>
                </PaginationItem>

            ))}

            <PaginationItem>
                <PaginationLink
                    href="#"
                    next onClick={nextPage}
                />
            </PaginationItem>
            {/* <PaginationItem>
                <PaginationLink
                    href="#"
                    last
                />
            </PaginationItem> */}
        </Pagination>
    )
}

export default TablePagination