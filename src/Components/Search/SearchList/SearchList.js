import React from 'react';
import {
  Card
} from 'reactstrap'
import styles from '../SearchList/SearchList.module.scss'

const SearchList = (props) => {
  const {id, title, company} = props.item
  return (
    <>
      <div className="">
        <Card className={styles.searchListCard}>
          <div className={"card-body "+ styles.cardBody}>
            <div className={styles.searchList}>
              <div className={styles.content}>
                <div className="title">
                  <span>{title}</span>
                </div>
                <div className="subtitle">
                  {company}
                </div>
              </div>
              <div className={styles.actions}>
                <button className={"btn " + styles.btnPrimary}>Know more</button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default SearchList;