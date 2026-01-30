import { useState } from "react";
import { useTranslation } from "react-i18next";

/* =========================
   Custom Input Field
========================= */
const CustomField = ({
  variant = "input", // input | textarea
  type = "text",
  id,
  name,
  placeholder,
  required = false,
  autoComplete,
  className = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const Component = variant === "textarea" ? "textarea" : "input";

  return (
    <Component
      id={id}
      name={name}
      type={variant === "input" ? type : undefined}
      placeholder={placeholder}
      autoComplete={autoComplete}
      required={required}
      className={`w-full p-3 rounded-md border bg-transparent text-paragraph
        focus:outline-none transition ${variant === "textarea" ? "h-40" : ""}
        ${className}`}
      style={{
        color: "var(--text_primary)",
        borderColor: isFocused
          ? "var(--border_focus)"
          : "var(--border_default)",
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

//  Contact Section
const ComponentsContact = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* ================= MAP CARD ================= */}
        <div className="flex flex-col gap-6 bg-[var(--background_surface)] rounded-2xl shadow-lg p-6">
          <h2 className="text-title text-primary font-bold text-center">
            {t("location_map")}
          </h2>

          {/* Maps */}
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9369051223853!2d107.63130388885497!3d-6.898149999999979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7bb26b63b69%3A0x9ed5cea73b538ee0!2sInstitut%20Teknologi%20Nasional%20Bandung%20(ITENAS)!5e0!3m2!1sid!2sid!4v1769693963061!5m2!1sid!2sid"
            className="w-full h-[22rem] rounded-xl"
            loading="lazy"
            allowFullScreen
          />

          {/* Operating Hours */}
          <div className="flex flex-col gap-2">
            <p className="text-subtitle font-semibold">{t("operatingHours")}</p>
            <p className="text-paragraph font-semibold">
              {t("oneWeek")}: 07:00 – 15:30 WIB
            </p>
          </div>

          {/* go location */}
          <a
            href="https://maps.app.goo.gl/Pj5EyehFHJ3iioQ37"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2 py-3 rounded-md font-semibold flex items-center justify-center gap-2"
          >
            {t("Directions")}
            <i className="ri-map-pin-2-line" />
          </a>
        </div>

        {/* ================= SUGGESTION BOX ================= */}
        <div className="flex flex-col gap-6 bg-[var(--background_surface)] rounded-2xl shadow-lg p-6">
          <h2 className="text-title text-primary font-bold text-center">
            {t("suggestion_box")}
          </h2>

          <p className="text-paragraph text-center opacity-80">
            {t("suggestion_desc")}
          </p>

          <form className="flex flex-col h-full gap-4 text-paragraph">
            <CustomField
              id="name"
              name="name"
              placeholder={t("name")}
              required
            />

            <CustomField
              type="email"
              id="email"
              name="email"
              placeholder={t("email")}
              autoComplete="email"
              required
            />

            <CustomField
              type="tel"
              id="phone"
              name="phone"
              placeholder={t("phone")}
              autoComplete="tel"
            />

            <CustomField
              variant="textarea"
              id="message"
              name="message"
              placeholder={t("message")}
              required
            />
          </form>
          <button
            type="submit"
            className="btn-primary py-3 rounded-md font-semibold flex items-center justify-center gap-2"
          >
            {t("send")}
            <i className="ri-send-plane-fill" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComponentsContact;
