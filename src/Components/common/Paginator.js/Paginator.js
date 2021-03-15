import styles from "./Paginator.module.css";

const Paginator = ({
  usersTotalCount,
  pageSize,
  currentPage,
  onChangePage,
}) => {
  let pagesCount = Math.ceil(usersTotalCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.cursor}>
      {pages.map((p) => {
        return (
          <span
            className={currentPage === p ? styles.selectedPage : styles.none}
            onClick={() => {
              onChangePage(p);
            }}
          >
            {p + " "}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
