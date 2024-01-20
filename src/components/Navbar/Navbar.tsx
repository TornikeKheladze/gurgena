import { useTranslation } from "react-i18next";
import Sidebar from "../sidebar/SideBar";
import LangDropdown from "../langDropdown/LangDropdown";
import Logo from "../logo/Logo";
import { useState } from "react";
import DropdownLayout from "./hoverDropdowns/DropdownLayout";
import { HeaderNames } from "../../types/general";
import ServiceContent from "./hoverDropdowns/ServiceContent";
import CatalogueContent from "./hoverDropdowns/CatalogueContent";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const locale = `/${i18n.language}`;
  const [active, setActive] = useState<HeaderNames>("");

  return (
    <div className="fixed h-20 z-50 bg-gray-100 border-b border-gray-600 border-opacity-40 shadow-md top-0 pt-6 pb-2">
      <Logo />
      <LangDropdown />
      <nav className="md:flex justify-center hidden mx-auto gap-2 bg-transparent w-screen">
        {active === "services" && (
          <DropdownLayout closeDropdown={setActive}>
            <ServiceContent />
          </DropdownLayout>
        )}
        {active === "catalogues" && (
          <DropdownLayout
            className="overflow-y-scroll pb-20"
            closeDropdown={setActive}
          >
            <CatalogueContent />
          </DropdownLayout>
        )}
        {active === "partners" && (
          <DropdownLayout closeDropdown={setActive}>partners</DropdownLayout>
        )}
        {active === "careers" && (
          <DropdownLayout closeDropdown={setActive}>careers</DropdownLayout>
        )}
        <button
          onMouseEnter={() => setActive("services")}
          className="md:w-36 hover:shadow-button hover:text-primaryRed w-full md:h-8 h-10 cursor-pointer text-base"
        >
          {t("services")}
        </button>
        <button
          onMouseEnter={() => setActive("catalogues")}
          className="md:w-36 hover:shadow-button hover:text-primaryRed w-full md:h-8 h-10 cursor-pointer text-base"
        >
          {t("catalogues")}
        </button>
        <button
          onMouseEnter={() => setActive("partners")}
          className="md:w-36 hover:shadow-button hover:text-primaryRed w-full md:h-8 h-10 cursor-pointer text-base"
        >
          {t("partners")}
        </button>
        <button
          onMouseEnter={() => setActive("careers")}
          className="md:w-36 hover:shadow-button hover:text-primaryRed w-full md:h-8 h-10 cursor-pointer text-base"
        >
          {t("careers")}
        </button>
      </nav>
      <Sidebar />
    </div>
  );
};

export default Navbar;
