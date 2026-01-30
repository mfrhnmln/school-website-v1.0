import { useTranslation } from "react-i18next";
import DataPrincipalsSpeech from "../../Data/DataPrincipalsSpeech";

const PrincipalsSpeechDashboard = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language; // "id" atau "en"
  return (
    //  Sambutan
    <div className="flex flex-col md:flex-row w-full h-full max-w-7xl justify-center items-center px-5 md:px-10 lg:px-20 gap-10">
      <img
        className="w-full md:w-1/2 max-h-80 object-contain rounded-md"
        src={DataPrincipalsSpeech.imageHorizontal}
        alt="Foto Kepala Sekolah"
      />

      <div className="flex flex-col w-full md:w-1/2 gap-4">
        <h1
          className="text-left text-title text-primary font-bold"
        >
          {t("welcome")}
        </h1>

        <p className="w-full text-paragraph text-justify whitespace-pre-line">
          {DataPrincipalsSpeech.messageDashboard[lang]}
        </p>

        <div className="flex flex-col">
          <h3 className="w-full text-paragraph text-left">
            {DataPrincipalsSpeech.position[lang]}
          </h3>

          <h2 className="w-full text-paragraph text-left font-bold">
            {DataPrincipalsSpeech.principalsName}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PrincipalsSpeechDashboard;
