import { useLocation, useNavigate } from "react-router-dom";
import { navigateOrScrollTo } from "./navigationHelper";
import { useTranslation } from "react-i18next";

const DropDownHeader = ({
  item,
  index,
  isOpen,
  setOpenDropdownIndex,
  onMenuClick,
}) => {
  const hasDropdown = item.dropdown && item.dropdown.length > 0;
  const location = useLocation();
  const navigate = useNavigate();

  // Handle klik menu utama
  const handleMainClick = (e) => {
    e.preventDefault();

    if (hasDropdown) {
      setOpenDropdownIndex(isOpen ? null : index);
    } else {
      navigateOrScrollTo(item.path, location.pathname, navigate);
      onMenuClick?.();
    }
  };

  const handleSubClick = (path) => {
    navigateOrScrollTo(path, location.pathname, navigate);
    setOpenDropdownIndex(null);
    onMenuClick?.();
  };

  const { t } = useTranslation();

  // Recursive render untuk submenu
  const renderDropdown = (dropdownItems) => (
    <ul className="absolute top-8 left-0 bg-[var(--background_nav)] shadow-md rounded-md z-50 min-w-[180px]">
      {dropdownItems.map((subItem, i) => {
        const subHasDropdown = subItem.dropdown && subItem.dropdown.length > 0;

        return (
          <li
            key={i}
            className="relative group px-4 py-3 hover:bg-[var(--background)] whitespace-nowrap cursor-pointer"
          >
            <div
              className="flex items-center justify-between text-nav"
              onClick={() => {
                if (subItem.external) {
                  window.open(subItem.path, "_blank", "noopener,noreferrer");
                } else if (!subHasDropdown) {
                  handleSubClick(subItem.path);
                }
              }}
            >
              <span>{t(subItem.key)}</span>

              {subHasDropdown && (
                <i className="ri-arrow-right-s-line ml-10"></i>
                // <i class="ri-arrow-down-s-line"></i>
              )}
            </div>

            {/* Sub-dropdown (level 2, 3, dst) */}
            {subHasDropdown && (
              <div className="absolute left-full -top-8 hidden group-hover:block z-50 min-w-full">
                {renderDropdown(subItem.dropdown)}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="relative dropdown-container">
      <div
        className="flex items-center gap-1 cursor-pointer text-nav font-bold"
        onClick={handleMainClick}
      >
        <span>{t(item.key)}</span>
        {hasDropdown && <i className="ri-arrow-down-s-line"></i>}
      </div>

      {/* Render dropdown recursive */}
      {hasDropdown && isOpen && renderDropdown(item.dropdown)}
    </div>
  );
};

export default DropDownHeader;
