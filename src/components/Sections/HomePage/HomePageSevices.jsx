import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
function HomePageServices({
  title,
  titleButtonText,
  text,
  text2,
  textButtonText,
  img1,
  img2,
}) {
  const [t] = useTranslation("translation");

  return (
    <>
      <div className="mb-[8rem]">
        <div className="flex justify-between items-center">
          <h3 className="text-[4rem] text-[#BAD0AC] font-[800]">{title}</h3>

          <button className="group border-[1px] py-[1.4rem] px-[6rem] rounded-[10px] hover:bg-[#2F6F62] transition">
            <Link className="text-[1.4rem] text-[#BAD0AC] font-[600] group-hover:text-[#ffffff]">
              {titleButtonText}
            </Link>
          </button>
        </div>
        <div className="relative flex flex-row mt-[4rem]">
          <div className="flex flex-col">
            <div
              className="max-w-[65%] text-[1.8rem] text-[#6F7F7A] font-[500] mb-[3rem]"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
            />
            <div
              className="list text-[1.8rem] text-[#6F7F7A] font-[600]"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text2) }}
            />
            <button>
              <Link>{textButtonText}</Link>
            </button>
          </div>
          <div>
            <div>
              <img className="max-w-[86rem]" src={img1} alt="img" />
            </div>
            <div className="absolute top-[31rem] right-[33rem]">
              <img className="max-w-[56rem]" src={img2} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePageServices;
