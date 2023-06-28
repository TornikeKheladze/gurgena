import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const NavButton: React.FC<{
  label: string;
  to: string;
  closeSidebar?: () => void;
}> = ({ label, to, closeSidebar }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const darkGreen = "#22d3ee";
  const defaultColor = "#d5dce6";
  const lightGreen = "#a5f3fc";
  const currentPage = pathname.includes(to);

  const buttonVariants = {
    initial: {
      background: currentPage ? darkGreen : defaultColor,
      scale: 1,
      transition: { duration: 0 },
    },
    hover: {
      background: currentPage ? darkGreen : lightGreen,
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };
  const clickHandler = () => {
    if (closeSidebar) {
      closeSidebar();
      setTimeout(() => {
        navigate(to);
      }, 500);
    } else {
      navigate(to);
    }
  };

  return (
    <motion.button
      variants={buttonVariants}
      onClick={clickHandler}
      initial="initial"
      whileHover="hover"
      className="md:w-36 w-full md:h-8 h-10 rounded-lg cursor-pointer text-base bg-cyan-400"
    >
      {label}
    </motion.button>
  );
};

export default NavButton;
