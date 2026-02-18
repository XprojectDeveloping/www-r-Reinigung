import { useTranslation } from "react-i18next";
import DOMPurify from "dompurify";
import { i } from "framer-motion/m";
function HomePageServicesCard({ dataCard }) {
  const [t] = useTranslation("translation");
  return (
    <>
      <div className="mb-[8rem]">
        <div className="grid grid-cols-12 gap-[4rem]">
          {dataCard &&
            dataCard.slice(0, 6).map((item) => {
              return (
                <div
                  key={item?.id}
                  className="group flex flex-col items-center col-span-4 bg-[#BAD0AC] p-[4rem] rounded-[2rem] hover:bg-[#2F6F62] transition"
                >
                  <div className="mb-[4rem]">
                    <img
                      className="max-w-[9rem] bg-[#F4F7F3] p-[1rem] rounded-[1rem]"
                      src={`${import.meta.env.VITE_PICTURE}/${item.image}`}
                      alt="servicres"
                    />
                  </div>
                  <h3 className="text-[2.2rem] text-[#1B1B1B] font-[600] mb-[2rem] group-hover:text-[#F4F7F3]">
                    {
                      item?.translations?.find(
                        (cur) =>
                          cur?.locale === localStorage?.getItem("i18nextLng"),
                      )?.service_name
                    }
                  </h3>
                  <div
                    className="text-center text-[1.6rem] text-[#1B1B1B] group-hover:text-[#F4F7F3]"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        item?.translations?.find(
                          (cur) =>
                            cur?.locale === localStorage?.getItem("i18nextLng"),
                        )?.service_short,
                      ),
                    }}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default HomePageServicesCard;
