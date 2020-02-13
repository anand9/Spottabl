import React from 'react';
import {
  Card, 
  CardBody,
  Button
} from 'reactstrap'
import styles from '../SearchList/SearchList.module.scss'

const SearchList = (props) => {
  const {id, title, company} = props.item
  return (
    <>
      <div className="">
        <Card className={styles.searchListCard}>
          <CardBody>
            <div className={styles.searchList}>
              <div className={styles.content}>
                <div className="title">
                  <span>{title}</span>
                </div>
                <div className="subtitle">
                  {company}
                </div>
              </div>
              <div className="actions">
                <button className={"btn " + styles.btnPrimary}>Know more</button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default SearchList;