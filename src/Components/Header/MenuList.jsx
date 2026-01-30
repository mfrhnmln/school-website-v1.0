import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// DROPDOWN HEADER MOBILE
const MenuList = ({ items, closeMenu, level = 0 }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul style={{ paddingLeft: `${level * 16}px` }}>
      {items.map((item, index) => (
        <li key={index}>
          {item.dropdown ? (
            <>
              <button
                onClick={() => toggleDropdown(index)}
                className={`w-full flex justify-between items-center py-2 ${
                  level === 0 ? "text-subtitle border-b" : "text-paragraph"
                }`}
              >
                {t(item.key)}
                <i
                  className={`ri-arrow-${
                    openIndex === index ? "up" : "down"
                  }-s-line`}
                />
              </button>

              {openIndex === index && (
                <MenuList
                  items={item.dropdown}
                  closeMenu={closeMenu}
                  level={level + 1}
                />
              )}
            </>
          ) : item.external ? (
            <a
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className={`block py-2 ${
                level === 0 ? "text-subtitle border-b" : "text-paragraph"
              }`}
              onClick={closeMenu}
            >
              {t(item.key)}
            </a>
          ) : (
            <Link
              to={item.path}
              className={`block py-2 ${
                level === 0 ? "text-subtitle border-b" : "text-paragraph"
              }`}
              onClick={closeMenu}
            >
              {t(item.key)}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
