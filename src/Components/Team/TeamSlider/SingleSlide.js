import React from 'react';
import styles from './Slider.module.scss'

const SingleSlide = (props) => {
  return (
    <div >
      <div className={styles.imageBox}>
        <img alt={props.user.first_name} className={styles.userImage} src={props.user.photo}></img>
      </div>
      
    </div>
  );
};

export default SingleSlide;