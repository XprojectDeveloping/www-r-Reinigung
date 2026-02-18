import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
function HomePageServicesHeader({
  title,
  titleButtonText,
  text,
  cardImg,
  cardTitle,
  cardText,
}) {
  const [t] = useTranslation("translation");
  return (
    <>
      <div className="mb-[8rem]">
        <div className="flex justify-between items-center mb-[4rem]">
          <h3 className="text-[4rem] text-[#BAD0AC] font-[800]">{title}</h3>

          <button className="group border-[1px] py-[1.4rem] px-[6rem] rounded-[10px] hover:bg-[#2F6F62] transition">
            <Link
              className="text-[1.4rem] text-[#BAD0AC] font-[600] group-hover:text-[#ffffff]"
              to={"/services"}
            >
              {titleButtonText}
            </Link>
          </button>
        </div>
        <div className="max-w-[60%] mb-[12.1rem]">
          <div
            className="text-[2rem] text-[#6F7F7A] font-[500]"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
          />
        </div>
      </div>
    </>
  );
}
export default HomePageServicesHeader;
