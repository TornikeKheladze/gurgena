import NavButton from "../buttons/NavButton";
import { useTranslation } from "react-i18next";
import Sidebar from "../sidebar/SideBar";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const locale = `/${i18n.language}`;

  return (
    <>
      <nav className="md:flex hidden justify-center gap-2 ">
        <NavButton label={t("services")} to={locale + "/services"} />
        <NavButton label={t("products")} to={locale + "/products"} />
        <NavButton label={t("contact")} to={locale + "/contact"} />
        <NavButton label={t("about")} to={locale + "/about"} />
      </nav>
      <Sidebar />
    </>
  );
};

export default Navbar;
