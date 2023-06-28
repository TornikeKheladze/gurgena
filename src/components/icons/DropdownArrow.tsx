const DropdownArrow: React.FC<{ isOpen: boolean; className: string }> = ({
  isOpen,
  className,
}) => {
  return (
    <svg
      className={`${className} text-gray-800 dark:text-white ${
        isOpen && "rotate-180"
      }`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 8"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
      />
    </svg>
  );
};

export default DropdownArrow;
