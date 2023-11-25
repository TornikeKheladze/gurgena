import NavButton from "../buttons/NavButton";
import { useTranslation } from "react-i18next";
import Sidebar from "../sidebar/SideBar";
import LangDropdown from "../langDropdown/LangDropdown";
import Logo from "../logo/Logo";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const locale = `/${i18n.language}`;

  return (
    <div className="fixed h-20 z-50 bg-gray-900 top-0 border-b border-gray-200 border-opacity-50 pt-6 pb-2">
      <Logo />
      <LangDropdown />
      <nav className="md:flex justify-center hidden mx-auto gap-2 bg-transparent w-screen">
        <NavButton label={t("services")} to={locale + "/services"} />
        <NavButton label={t("products")} to={locale + "/products"} />
        <NavButton label={t("contact")} to={locale + "/contact"} />
        <NavButton label={t("about")} to={locale + "/about"} />
      </nav>
      <Sidebar />
    </div>
  );
};

export default Navbar;
