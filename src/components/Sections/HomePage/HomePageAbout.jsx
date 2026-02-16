import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { useTranslation } from "react-i18next";
function HomePageAbout({
  title,
  text,
  titleButtonText,
  cardimg1,
  cardimg2,
  cardimg3,
  cardimg4,
  cardtext1,
  cardtext2,
  cardtext3,
  cardtext4,
}) {
  const [t] = useTranslation("translation");
  return (
    <>
      <div className="mb-[8rem]">
        <div className="flex justify-between items-center mb-[4rem]">
          <h3 className="text-[4rem] text-[#BAD0AC] font-[800]">{title}</h3>

          <button className="border-[1px] py-[1.4rem] px-[6rem] rounded-[10px] hover:bg-[#2F6F62] transition">
            <Link
              className="text-[1.4rem] text-[#BAD0AC] font-[600]"
              to={"/about"}
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

        <div>
          <div className="grid grid-cols-12 items-center gap-[4rem]">
            <div className="col-span-3 gap-[4rem] flex flex-col items-center border-[1px] border-solid border-[#BAD0AC] rounded-[2rem]">
              <div>
                <img
                  className="max-w-[6rem] bg-[#BAD0AC] p-[1rem] rounded-[3rem]"
                  src={cardimg1}
                  alt="card-img"
                />
              </div>

              <div
                className="text-center text-[1.4rem] text-[#1B1B1B] font-[500] "
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(cardtext1),
                }}
              />
            </div>
            <div className="col-span-3 gap-[4rem] flex flex-col items-center border-[1px] border-solid border-[#BAD0AC] rounded-[2rem]">
              <img
                className="max-w-[6rem] bg-[#BAD0AC] p-[1rem] rounded-[3rem]"
                src={cardimg2}
                alt="card-img"
              />

              <div
                className="text-center text-[1.4rem] text-[#1B1B1B] font-[500]"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(cardtext2),
                }}
              />
            </div>
            <div className="col-span-3 gap-[4rem] flex flex-col items-center border-[1px] border-solid border-[#BAD0AC] rounded-[2rem]">
              <img
                className="max-w-[6rem] bg-[#BAD0AC] p-[1rem] rounded-[3rem]"
                src={cardimg3}
                alt="card-img"
              />

              <div
                className="text-center text-[1.4rem] text-[#1B1B1B] font-[500]"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(cardtext3),
                }}
              />
            </div>
            <div className="col-span-3 gap-[4rem] flex flex-col items-center border-[1px] border-solid border-[#BAD0AC] rounded-[2rem]">
              <img
                className="max-w-[6rem] bg-[#BAD0AC] p-[1rem] rounded-[3rem]"
                src={cardimg4}
                alt="card-img"
              />

              <div
                className="text-center text-[1.4rem] text-[#1B1B1B] font-[500]"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(cardtext4),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePageAbout;
