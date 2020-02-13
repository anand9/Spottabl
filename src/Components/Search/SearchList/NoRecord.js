import React from 'react';
import {
  Card,
  CardBody
} from 'reactstrap'
import styles from '../SearchList/SearchList.module.scss'

const NoRecord = () => {
  return (
    <>
      <Card className={styles.searchListCard}>
        <CardBody>
          <div className={styles.searchList}>
            <span className="text-center w-100"><i>No results found</i></span>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default NoRecord;