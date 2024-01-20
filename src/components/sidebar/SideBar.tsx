import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// import NavButton from "../buttons/NavButton";
import Close from "../icons/Close";
import BurgerButton from "../icons/BurgerButton";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const locale = `/${i18n.language}`;

  const changeLanguage = (language: string) => {
    navigate(pathname.replace(i18n.language, language));
  };

  const en =
    i18n.language === "ka"
      ? "border border-gray-400 text-white p-1 rounded"
      : "border-4 border-cyan-400 text-white p-1 rounded";
  const ka =
    i18n.language === "en"
      ? "border border-gray-400 text-white p-1 rounded"
      : "border-4 border-cyan-400 text-white p-1 rounded";

  return (
    <>
      <motion.div
        initial={{ width: "0" }}
        animate={{ width: open ? "100%" : "0" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.5 }}
        className={` z-40 w-full h-full fixed bg-zinc-800 right-0 top-0`}
      >
        <Close className="absolute top-4 left-4" click={() => setOpen(false)} />
        {open && (
          <motion.nav
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full gap-2 p-4 pt-16"
          >
            {/* <NavButton
              closeSidebar={() => setOpen(false)}
              label={t("services")}
              to={locale + "/services"}
            />
            <NavButton
              closeSidebar={() => setOpen(false)}
              label={t("products")}
              to={locale + "/products"}
            />
            <NavButton
              closeSidebar={() => setOpen(false)}
              label={t("contact")}
              to={locale + "/contact"}
            />
            <NavButton
              closeSidebar={() => setOpen(false)}
              label={t("about")}
              to={locale + "/about"}
            /> */}
            <div className="flex w-full justify-center gap-2 h-14 items-center mt-8">
              <button onClick={() => changeLanguage("en")} className={en}>
                ENG
              </button>
              <button onClick={() => changeLanguage("ka")} className={ka}>
                GEO
              </button>
            </div>
          </motion.nav>
        )}
      </motion.div>
      <BurgerButton
        click={() => setOpen(true)}
        className="w-5 h-5 md:hidden fixed right-5 top-5"
      />
    </>
  );
};

export default Sidebar;
