import React from 'react';
import styles from '../TeamDetails/TeamDetails.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const TeamDetails = (props) => {
  const { description, title, first_name, last_name } = props.user
  return (

    <>
      <div className={styles.outerBox}>
        <div className={styles.title}>
          Our Team
        </div>
        <div className={styles.userDetails}>
          <div className={styles.userInfo}>
            {description}
          </div>
          <div className={styles.userName}>
            {first_name+ " " +last_name}
            <span className={styles.socialIcons}><FontAwesomeIcon icon={faLinkedin } /></span>
          </div>
          <div className={styles.userTitle}>
            {title}
          </div>
          <div className={styles.userDesc}>
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetails;