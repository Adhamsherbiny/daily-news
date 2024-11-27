// import React from "react";
// import "../styles/pagination.scss";
// type PaginationProps = {
//   perpage: number;
//   currentPage: number;
//   totalPages: number;
//   setPage: (page: number) => void;
// };

// export default function Pagination({
//   perpage,
//   currentPage,
//   totalPages,
//   setPage,
// }: PaginationProps) {
//   // const handlePrevious = () => {
//   //   if (currentPage > 1) setPage(currentPage - 1);
//   // };
//   console.log(perpage);

//   const handleNext = () => {
//     console.log(perpage);
//     setPage((perpage += 1));
//   };

//   return (
//     // <div className="pagination">
//     //   <button onClick={handlePrevious} disabled={currentPage === 1}>
//     //     <Link href={""}>
//     //       <FontAwesomeIcon className="pagination-icon" icon={faAngleLeft} />
//     //     </Link>
//     //   </button>
//     //   <span>
//     //     {currentPage} of {totalPages}
//     //   </span>
//     //   <button onClick={handleNext} disabled={currentPage === totalPages}>
//     //     <Link href={""}>
//     //       <FontAwesomeIcon className="pagination-icon" icon={faAngleRight} />
//     //     </Link>
//     //   </button>
//     // </div>
//     <div className="pagination">
//       <button className="read-more" onClick={handleNext}>
//         Read More
//       </button>
//     </div>
//   );
// }
import React from "react";
import "../styles/pagination.scss";

type PaginationProps = {
  perpage: number;
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
};

export default function Pagination({
  perpage,
  currentPage,
  totalPages,
  setPage,
}: PaginationProps) {
  const handleNext = () => {
    if (currentPage < totalPages) {
      setPage(perpage + 1); // Increment current page
    }
  };

  return (
    <div className="pagination">
      <button
        className="read-more"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Read More
      </button>
    </div>
  );
}
