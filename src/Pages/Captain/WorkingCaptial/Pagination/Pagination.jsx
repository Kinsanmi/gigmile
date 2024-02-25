import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import './Pagination.scss'

export const Pagination = ({
  postPerPage,
  totalPost,
  paginate,
  currentPage,
  nextPage,
  previousPage
}) => {

  const totalPages = Math.ceil( totalPost / postPerPage);
  const pageNumber = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(i);
  }

  const pageRender = () => {
    // Loading statement
    

    return (
      <>
        <div className="pages">
          <div className="pagination">
            <button onClick={previousPage} disabled={currentPage === 1} className="page-number"><MdKeyboardArrowLeft /></button>

            <div className="page-digit">
              {pageNumber.map((number) => {
                return (
                  <a
                    href="#"
                    key={number}
                    onClick={() => paginate(number)}
                    className={number === currentPage ? "active" : "inactive"}
                  >
                    {number}
                  </a>
                );
              })}
            </div>

            <button onClick={nextPage} disabled={currentPage === pageNumber.length} className="page-next"><MdKeyboardArrowRight /></button>
          </div>
        </div>
      </>
    );
  };

  return <>{pageRender()}</>;
}
