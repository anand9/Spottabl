import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import {
  Container, 
  Row,
  Col
} from 'reactstrap'
import TeamSlider from './TeamSlider/TeamSlider';
import TeamDetails from './TeamDetails/TeamDetails';
import teamData from '../../Data/Team.json'
import styles from './Team.module.scss'

const TeamHome = () => {
  const [currentUser, setUser]=useState({...teamData[0]})
  const setCurrentUser=(user)=>{
    console.log(user)
    setUser({
      ...currentUser,
      ...user
    })
  }
  return (
    <Fade left>
      <Container>
        <Row className="justify-content-center">
          <Col md="10" lg="10" xs="12" className="text-center">
            {/* <div className={styles.teamContainer}> */}
            <div class="row">
            <Col md="5">
                <TeamDetails user={currentUser}/>
              </Col>
              <Col md="7">
                <div class={styles.sliderContainer}>
                  <TeamSlider setCurrentUser={setCurrentUser} teamData={teamData}/> 
                </div>

              </Col>  
            </div>
       
            {/* </div>       */}
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

export default TeamHome;