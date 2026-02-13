import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Lang({ toggle, swichLang }) {
  const { i18n } = useTranslation();
  const curretLang = i18n.language ? i18n.language.split("-")[0] : "az";

  useEffect(() => {
    if (localStorage.getItem("i18nextLng") !== curretLang) {
      (localStorage.setItem("i18nextLng"), curretLang);
    }
  }, [curretLang]);

  return (
    <>
      <div className="relative text-[#000000]">
        <div
          className="flex gap-[9px] items-center cursor-pointer"
          onClick={toggle}
        >
          <button
            className="text-[#002755] lowercase text-[1.4rem]"
            name="button"
            type="button"
          >
            {curretLang}
          </button>
        </div>
        {swichLang}
      </div>
    </>
  );
}
export default Lang;
