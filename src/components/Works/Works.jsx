import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/1.png";
import Fiverr from "../../img/2.png";
import Amazon from "../../img/3.png";
import Shopify from "../../img/4.png";
import Facebook from "../../img/5.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
         
          </span>
          <span>Expertise</span>
          <spane>
           As a data analyst, I have developed a strong skill set <br />
           that enables me to gather, analyze, and interpret data<br />
           to derive meaningful insights. My experience with various<br />
           tools and technologies has allowed me to manipulate and <br />
           transform data in different formats, perform statistical<br />
            analyses, and create visualizations to communicate insights<br />
             to stakeholders.<br />
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" style={{width: '150px', height: '150px'}} />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" style={{width: '150px', height: '150px'}} />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" style={{width: '150px', height: '150px'}} />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" style={{width: '150px', height: '150px'}} />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" style={{width: '150px', height: '150px'}} />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
