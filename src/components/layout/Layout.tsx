import React, { ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar/Navbar";
import Logo from "../logo/Logo";
import LangDropdown from "../langDropdown/LangDropdown";
import { useLocation } from "react-router-dom";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLanguage = pathname.split("/")[1];
    i18n.changeLanguage(currentLanguage);
  }, [pathname]);
  return (
    <div>
      <Logo />
      <Navbar />
      <LangDropdown />
      {children}
    </div>
  );
};

export default Layout;
