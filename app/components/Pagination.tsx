import React from "react";
import "../styles/pagination.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  setPage,
}: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) setPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setPage(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        <Link href={"#news-section"}>
          <FontAwesomeIcon className="pagination-icon" icon={faAngleLeft} />
        </Link>
      </button>
      <span>
        {currentPage} of {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        <Link href={"#news-section"}>
          <FontAwesomeIcon className="pagination-icon" icon={faAngleRight} />
        </Link>
      </button>
    </div>
  );
}
