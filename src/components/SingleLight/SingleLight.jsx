import React, { useState } from "react";
import LightOff from "/images/light-turned-off.svg";
import LightPink from "/images/light-pink.svg";

const SingleLight = () => {
  const [isOn, setOn] = useState(true);

  const imageSrc = isOn ? LightPink : LightOff;

  const handleToggle = () => {
    setOn(!isOn);
  };
  return <img src={imageSrc} alt="Single light" onClick={handleToggle} />;
};

export default SingleLight;
