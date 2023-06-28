import { useNavigate } from "react-router-dom";

import logo from "../../images/logo.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const Logo = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{
        opacity: "0",
        x: "100px",
        y: "120px",
        rotate: 360,
        background: "#155e75",
      }}
      animate={{
        opacity: "100%",
        x: "0",
        y: "0",
        rotate: 0,
        background: "#fafcfb",
      }}
      transition={{ duration: 0.7 }}
      onClick={() => {
        navigate("/");
      }}
      className="font-bold fixed top-4 left-6 cursor-pointer "
    >
      <img className="w-20" src={logo} alt="logo" />
    </motion.div>
  );
};

export default Logo;
