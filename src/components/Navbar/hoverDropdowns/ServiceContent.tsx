import { useTranslation } from "react-i18next";
import { catalogueData } from "../../../data/catalogueData";

const ServiceContent = () => {
  const { t } = useTranslation();
  return (
    <div className="p-5 flex justify-center">
      <div>
        <h1 className="border-b border-gray-400 font-semibold mb-3 text-xl hover:text-primaryRed cursor-pointer transition-colors duration-200">
          {t("services")}
        </h1>
        <ul>
          {catalogueData.map(({ title, id }) => (
            <li
              key={id + Math.random()}
              className="hover:text-primaryRed cursor-pointer transition-colors duration-200"
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceContent;
