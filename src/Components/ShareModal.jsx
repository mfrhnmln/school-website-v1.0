import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDisableBodyScroll } from "../Function/useDisableBodyScroll";

import shareLinksData from "../Data/shareLinksData";

const ShareModal = ({ show, onClose }) => {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useDisableBodyScroll(show);

  const currentUrl = window.location.href;

  // Handle modal animation
  useEffect(() => {
    if (show) {
      setVisible(true);
      setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);
      setTimeout(() => setVisible(false), 300);
    }
  }, [show]);

  if (!show && !visible) return null;

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => toast.success("Link berhasil disalin!"))
      .catch(() => toast.error("Gagal menyalin link"));
  };

  const sortedLinks = [...shareLinksData].sort((a, b) => a.order - b.order);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center bg-[var(--background_modal)]/80 transition-opacity duration-300 ${
        animate ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`flex flex-col w-full max-w-3xl bg-[var(--background_modal)] rounded-t-3xl shadow-2xl p-4 gap-5 transform transition-transform duration-300 ${
          animate ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center relative px-5">
          <h2 className="text-subtitle font-bold text-primary text-center w-full ml-10">
            Bagikan ke
          </h2>
          <button
            onClick={onClose}
            className="text-small-icon font-bold cursor-pointer hover:scale-125 transition"
            style={{ color: "var(--error)" }}
          >
            <i className="ri-close-large-line"></i>
          </button>
        </div>

        {/* Share Icons */}
        <div className="flex justify-start overflow-x-auto hide-scrollbar gap-10 px-10 py-4 snap-x snap-mandatory">
          {sortedLinks.map((link) => (
            <div
              key={link.id}
              className="flex flex-col items-center gap-2 w-14"
            >
              {/* khusus salin link */}
              {link.title.toLowerCase() === "salin link" ? (
                <button
                  onClick={handleCopyLink}
                  className="flex items-center justify-center w-14 h-14 rounded-full snap-start"
                  style={{ backgroundColor: link.color }}
                >
                  <i
                    className={`${link.icon} text-title`}
                    style={{ color: "var(--text_white)" }}
                  ></i>
                </button>
              ) : (
                // share lainnya
                <a
                  href={
                    typeof link.href === "function"
                      ? link.href(currentUrl)
                      : currentUrl
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 rounded-full snap-start"
                  style={{ backgroundColor: link.color }}
                >
                  <i
                    className={`${link.icon} text-title`}
                    style={{ color: "var(--text_white)" }}
                  ></i>
                </a>
              )}

              <p className="text-helper text-center text-paragraph">
                {link.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
