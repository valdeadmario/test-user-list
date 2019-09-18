import React from "react";

import "./style.css";

const Pagination = ({ countPages, currentPage, changePage }: any) => {
  let pages = [];
  for (let i = 1; i <= countPages; i++) {
    if (i === currentPage) {
      pages.push(
        <span className="active" onClick={() => changePage(i)} key={i}>
          {i}
        </span>
      );
    } else {
      pages.push(
        <span onClick={() => changePage(i)} key={i}>
          {i}
        </span>
      );
    }
  }
  return <div className="pagination">{pages}</div>;
};

export default Pagination;
