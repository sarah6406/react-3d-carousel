import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";
// import { Link } from "react-router-dom";

function Card({ image, title, paragraph }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  
  const handleButtonClick = () => {
    window.location.href = "https://englishenglish.biz/world-gurning-championships/";
  };

  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={image} alt="" />

      <h2>{title}</h2>
      <p>{paragraph}</p>
      <Button text="Click to visit Gurning Championships!" onClick={handleButtonClick}/>
    </animated.div>
  );
}

export default Card;
