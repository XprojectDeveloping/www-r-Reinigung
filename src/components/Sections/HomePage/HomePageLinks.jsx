import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
function HomePageLinks({ title, titleButtonText, text, cards }) {
  return (
    <>
      <div className="mb-[8rem] pt-[15rem]">
        <div className="flex justify-between items-center mb-[4rem]">
          <h3 className="text-[4rem] text-[#BAD0AC] font-[800]">{title}</h3>
          <button className="group border-[1px] py-[1.4rem] px-[6rem] rounded-[10px] hover:bg-[#2F6F62] transition">
            <Link className="text-[1.4rem] text-[#BAD0AC] font-[600] group-hover:text-[#ffffff]">
              {titleButtonText}
            </Link>
          </button>
        </div>
        <div className="max-w-[60%] mb-[10rem]">
          <div
            className="text-[2rem] text-[#6F7F7A] font-[500]"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
          />
        </div>
        <div className="grid grid-cols-12 gap-[4rem]">
          {cards &&
            cards?.map((item) => {
              return (
                <div
                  className="flex flex-col justify-center gap-[2rem] col-span-4 border-[1px] border-[#2F6F62] px-[4rem] py-[4.9rem] rounded-[2rem]"
                  key={item.id}
                >
                  <div
                    className="text-[1.8rem] text-[#1B1B1B] font-[500]"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        item?.translations?.find(
                          (cur) =>
                            cur?.locale === localStorage?.getItem("i18nextLng"),
                        )?.name,
                      ),
                    }}
                  />

                  <p className="text-[1.6rem] text-[#1B1B1B] font-[400]">
                    {
                      item?.translations?.find(
                        (cur) =>
                          cur?.locale === localStorage?.getItem("i18nextLng"),
                      )?.person_name
                    }
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default HomePageLinks;
