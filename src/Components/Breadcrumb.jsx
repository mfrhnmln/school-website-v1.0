import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ paths = [] }) => {
  return (
    <div className="flex w-full max-w-5xl mx-auto items-center justify-start py-3 px-6 gap-2 bg-[var(--background_surface)] rounded-md">
      {paths.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center gap-2 text-nav font-semibold"
        >
          {item.href ? (
            <Link
              to={item.href}
              className="text-[var(--text_primary)] hover:brightness-90 hover:underline hover:underline-offset-3"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--text_primary)]/60">
              {item.label}
            </span>
          )}
          {idx < paths.length - 1 && (
            <i className="ri-checkbox-blank-circle-line text-[var(--secondary)]"></i>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
