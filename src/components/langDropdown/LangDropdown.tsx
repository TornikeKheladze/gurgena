import Dropdown from "react-dropdown";
import { useTranslation } from "react-i18next";
import DropdownArrow from "../icons/DropdownArrow";
import { useLocation, useNavigate } from "react-router-dom";

const LangDropdown = () => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const changeLanguage = (language: string) => {
    navigate(pathname.replace(i18n.language, language));
  };
  return (
    <div
      className={`md:flex hidden flex-col  cursor-pointer fixed right-5 top-5`}
    >
      <Dropdown
        controlClassName="flex gap-3 items-center"
        arrowClassName="w-3"
        onChange={(e) => changeLanguage(e.value)}
        arrowClosed={<DropdownArrow className="w-3" isOpen={false} />}
        arrowOpen={<DropdownArrow className="w-3" isOpen={true} />}
        value={i18n.language}
        options={[
          {
            value: "ka",
            label: "GEO",
            className: `${i18n.language === "ka" ? "hidden" : "block"}`,
          },
          {
            value: "en",
            label: "ENG",
            className: `${i18n.language === "en" ? "hidden" : "block"}`,
          },
        ]}
      />
    </div>
  );
};

export default LangDropdown;
