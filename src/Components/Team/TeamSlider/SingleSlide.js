import React from 'react';
import styles from './Slider.module.scss'

const SingleSlide = (props) => {
  return (
    <div >
      <div class={styles.imageBox}>
        <img className={styles.userImage} src={props.user.photo}></img>
      </div>
      
    </div>
  );
};

export default SingleSlide;