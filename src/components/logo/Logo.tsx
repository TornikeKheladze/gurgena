import { useNavigate } from "react-router-dom";

import logo from "../../images/logo.png";
import { motion } from "framer-motion";
import { useState } from "react";
const Logo = () => {
  const navigate = useNavigate();
  const [isAnimated, setIsAnimated] = useState(false);

  const handleClick = () => {
    setIsAnimated(!isAnimated);
  };

  const logoVariants = {
    initial: {
      x: "0",
      y: "0",
      rotate: 360,
      width: "40px",
      height: "40px",
      background: "transparent",
    },
    animated: {
      x: "100px",
      y: "100px",
      rotate: 0,
      width: "200px",
      height: "200px",
      background: "transparent",
    },
  };

  return (
    <motion.div
      variants={logoVariants}
      initial="initial"
      animate={isAnimated ? "animated" : "initial"}
      transition={{ duration: 0.4 }}
      onClick={() => {
        handleClick();
        setTimeout(() => {
          navigate("/");
        }, 400);
      }}
      className="font-bold fixed top-2 left-6 cursor-pointer"
    >
      <div className="bg-transparent">
        <img className="w-full bg-transparent" src={logo} alt="logo" />
      </div>
    </motion.div>
  );
};

export default Logo;
