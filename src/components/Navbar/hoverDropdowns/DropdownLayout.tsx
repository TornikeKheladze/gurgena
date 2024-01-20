import { Dispatch, ReactNode, SetStateAction } from "react";
import CloseIcon from "../../icons/CloseIcon";
import { HeaderNames } from "../../../types/general";

const DropdownLayout: React.FC<{
  closeDropdown: Dispatch<SetStateAction<HeaderNames>>;
  children: ReactNode;
  className?: string;
}> = ({ closeDropdown, children, className }) => {
  return (
    <div
      onMouseLeave={() => closeDropdown("")}
      className={
        "fixed w-screen min-h-[40%] max-h-screen shadow-md top-20 bg-gray-300 z-20 " +
        className
      }
    >
      <button
        onClick={() => closeDropdown("")}
        className="absolute right-8 top-6"
      >
        <CloseIcon className="w-8 hover:text-primaryRed cursor-pointer transition-colors duration-200" />
      </button>
      {children}
    </div>
  );
};

export default DropdownLayout;
