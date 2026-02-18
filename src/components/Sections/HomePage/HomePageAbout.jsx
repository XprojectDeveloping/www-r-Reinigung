import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
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
  return (
    <>
      <div className="mb-[8rem]">
        <div className="flex justify-between items-center mb-[4rem]">
          <h3 className="text-[4rem] text-[#BAD0AC] font-[800]">{title}</h3>
          <button className="group border-[1px] py-[1.4rem] px-[6rem] rounded-[10px] hover:bg-[#2F6F62] transition">
            <Link
              className="text-[1.4rem] text-[#BAD0AC] font-[600] group-hover:text-[#ffffff]"
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
          <div className="grid grid-cols-12 items-stretch gap-[4rem] mt-[3rem]">
            {[
              { img: cardimg1, text: cardtext1 },
              { img: cardimg2, text: cardtext2 },
              { img: cardimg3, text: cardtext3 },
              { img: cardimg4, text: cardtext4 },
            ].map((card, index) => (
              <div
                key={index}
                className="relative col-span-3 flex flex-col items-center border-[1px] border-solid border-[#BAD0AC] rounded-[2rem] pb-[4rem] pt-[6rem]"
              >
                <div className="absolute -top-[3rem] left-1/2 -translate-x-1/2">
                  <img
                    className="w-[6rem] h-[6rem] object-contain bg-[#BAD0AC] p-[0.8rem] rounded-full border-[6px] border-white"
                    src={card.img}
                    alt="card-img"
                  />
                </div>
                <div
                  className="text-center text-[1.8rem] text-[#1B1B1B] font-[500] leading-snug"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(card.text),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePageAbout;
