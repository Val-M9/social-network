import { useState } from "react";
import styles from "./Paginator.module.css";

const Paginator = ({
  itemsTotalCount,
  pageSize,
  currentPage,
  onChangePage,
  sectionSize = 10,
}) => {
  let pagesCount = Math.ceil(itemsTotalCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let pageSectionsCount = Math.ceil(pagesCount / sectionSize);
  let [sectionNumber, setSectionNumber] = useState(1);
  let leftEdge = (sectionNumber - 1) * sectionSize + 1;
  let rightEdge = sectionNumber * sectionSize;

  return (
    <div className={styles.paginator}>
      {sectionNumber > 1 && (
        <button
          className={styles.button}
          onClick={() => setSectionNumber(sectionNumber - 1)}
        >
          &#171;
        </button>
      )}
      {pages
        .filter((p) => p >= leftEdge && p <= rightEdge)
        .map((p) => {
          return (
            <span
              key={p}
              className={`${styles.pageNumber} ${
                currentPage === p ? styles.selectedPage : styles.none
              }`}
              onClick={() => {
                onChangePage(p);
              }}
            >
              {p + " "}
            </span>
          );
        })}
      {pageSectionsCount > sectionNumber && (
        <button
          className={styles.button}
          onClick={() => setSectionNumber(sectionNumber + 1)}
        >
          &#187;
        </button>
      )}
    </div>
  );
};

export default Paginator;
