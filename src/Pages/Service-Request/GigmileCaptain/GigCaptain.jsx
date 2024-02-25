import React from "react";
import { useState, useEffect } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Pagination } from "../../Captain/WorkingCaptial/Pagination/Pagination";
import { captainRequest } from "./Gig";
import './gig.scss';

export const GigCaptain = () => {
  const [active, setActive] = useState(captainRequest);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  const [search, setSearch] = useState("");

  const filterData = captainRequest.filter((names) =>
    names.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setActive(filterData);
  }, [search]);

  const handleSearch = () => {
    const query = event.target.value;
    setSearch(query);
    setCurrentPage(1);
  };

  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;

  const currentPost = active && active.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const nextPage = () => {
    const totalPage = Math.ceil(active.length / postPerPage);

    if (currentPage < totalPage) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className="pending">
      <div className="search">
        <h2>Gigmile capital on working capital service requests</h2>

        <div className="filter-search">
          <div className="btn">
            <input
              type="text"
              placeholder="Search captains, services..."
              value={search}
              onChange={handleSearch}
            />
            <IoIosSearch className="search-bar" />
          </div>

          <div className="filter">
            <h3>Filter by</h3>
            <IoFilterOutline />
          </div>
        </div>
      </div>

      <div className="active-list">
        <table className="repayment">
          <thead>
            <tr className="cap-names">
              <th>captain</th>
              <th>Mobile number</th>
              <th>joined gigmile</th>
              <th>service request</th>
            </tr>
          </thead>
          {currentPost.map((capital) => {
            return (
              <tbody>
                <tr className="table-list">
                  <td>
                    <div className="list-img">
                      <img src={capital.image} alt="profile photo" />
                      <h2>{capital.name}</h2>
                    </div>
                  </td>

                  <td className="value">
                    <h2>{capital.mobile}</h2>
                  </td>

                  <td className="value">
                    <h2>{capital.date}</h2>
                  </td>

                  <td className="request-list">
                    <h2>{capital.service}</h2>
                    <h2>{capital.serviceRequest}</h2>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>

      <Pagination
        postPerPage={postPerPage}
        totalPost={active.length}
        paginate={paginate}
        currentPage={currentPage}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </div>
  );
};
