import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
function HomePageAbout({
  title,
  titleButtonText,
  text,
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
      <div>
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
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <img src={cardimg1} alt="card-img" />

              <p>{cardtext1}</p>
            </div>
            <div className="col-span-3">
              <img src={cardimg2} alt="card-img" />

              <p>{cardtext2}</p>
            </div>
            <div className="col-span-3">
              <img src={cardimg3} alt="card-img" />

              <p>{cardtext3}</p>
            </div>
            <div className="col-span-3">
              <img src={cardimg4} alt="card-img" />

              <p>{cardtext4}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePageAbout;
