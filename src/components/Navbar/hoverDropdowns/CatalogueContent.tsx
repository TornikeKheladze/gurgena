import { useTranslation } from "react-i18next";
import { catalogueData } from "../../../data/catalogueData";

const CatalogueContent: React.FC<{}> = () => {
  const { t } = useTranslation();
  return (
    <div className="px-20 py-5 grid grid-cols-3 gap-3 h-full">
      {catalogueData.map(({ id, list, title }) => {
        return (
          <div key={id}>
            <h2 className="border-b border-gray-400 font-semibold mb-3 hover:text-primaryRed cursor-pointer transition-colors duration-200">
              {title}
            </h2>
            {list.map((item) => (
              <p
                className="hover:text-primaryRed cursor-pointer transition-colors duration-200"
                key={id + Math.random()}
              >
                {item}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default CatalogueContent;
