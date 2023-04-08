import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import A from "../../img/1.jpg";
import B from "../../img/2.jpg";
import C from "../../img/3.jpg";
import D from "../../img/4.jpg";
import E from "../../img/5.jpg";
import F from "../../img/6.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={A} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={B} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={C} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={D} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={F} alt=""  style={{width: '400px', height: '210px'}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={E} alt="" style={{width: '400px', height: '200px'}} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
