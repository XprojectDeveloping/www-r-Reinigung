import { useTranslation } from "react-i18next";
import useGlobalFetch from "../components/useGlobalFetch/useGlobalFetch";
import MaxWidth from "../components/MaxWidth/MaxWidth";
import facebookImg from "/accets/img/footer/facebook.svg";
import instagramImg from "/accets/img/footer/instagram.svg";
import linkedinImg from "/accets/img/footer/linkedin.svg";
import { Link } from "react-router-dom";
function Footer({ text }) {
  const [t, i18n] = useTranslation("translation");
  const { data } = useGlobalFetch();
  return (
    <>
      <footer>
        <div className="bg-[#BAD0AC]">
          <MaxWidth>
            <div className="flex justify-between items-center py-[5.4rem]">
              <div>
                <img
                  className="filter invert-100 sepia-22 saturate-71 hue-rotate-[287deg] brightness-[200%] contrast-[101%]"
                  src={`${import.meta.env.VITE_PICTURE}/${data?.settings?.logob}`}
                />
              </div>
              <div className="flex gap-[2.1rem]">
                {[
                  {
                    img: facebookImg,
                    alt: "solial-logo",
                    link: data?.settings?.facebook,
                  },
                  {
                    img: instagramImg,
                    alt: "solial-logo",
                    link: data?.settings?.instagram,
                  },
                  {
                    img: linkedinImg,
                    alt: "solial-logo",
                    link: data?.settings?.linkedin,
                  },
                ]?.map((item) => {
                  return (
                    <a href={item.link} key={item.id}>
                      <img src={item.img} alt={item.alt} />
                    </a>
                  );
                })}
              </div>
            </div>
          </MaxWidth>
        </div>
        <div className="bg-[#F4F7F3]">
          <p className="text-center py-[2rem] text-[1.4rem] text-[#000000] font-[400]">
            {(text = "©️ 2026 Reinigungsfirma Deutschland")}
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
