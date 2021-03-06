import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './SearchPaginate.module.scss'


const SearchPaginate = (props) => {
  return (
    <div>
      <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={props.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={props.handlePageClick}
          pageClassName={styles.pageItem}
          nextClassName={styles.pageItem}
          breakClassName={styles.pageItem}
          breakLinkClassName={styles.pageLink}
          activeLinkClassName={styles.activeItem}
          pageLinkClassName={styles.pageLink}
          nextLinkClassName={styles.pageLink + " rounded-right"}
          previousLinkClassName={styles.pageLink + " rounded-left"}
          containerClassName={styles.paginationContainer}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
    </div>
  );
};

export default SearchPaginate;