import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {settings, NextArrow, PrevArrow} from './SliderSettings';

import SingleSlide from './SingleSlide';
const TeamSlider = (props) => {

  const [sliderState, setState] = useState({activeSlide:0, activeSlide2:0})
  const {setCurrentUser, teamData} = props
  //const setCurrentUser = props.currentUser
  const onSlide=(current)=> {
    setState({ activeSlide2: current })
    setCurrentUser(teamData[current])
    
  }



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    beforeChange: (current, next) => setState({ activeSlide: next }),
    afterChange: ((current)=>onSlide(current)),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings}>
        {teamData.map((user, index)=> {
          return (
            <SingleSlide user={user} key={index}/>
          )
        })}
      </Slider>
    </>
  );
};

export default TeamSlider;