import { useTranslation } from "react-i18next";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay } from "swiper/modules";
function HomePageSlider({ dataSlider }) {
  const [t, i18n] = useTranslation("translation");

  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        effect={"fade"}
        modules={[Autoplay]}
      >
        <div>
          {dataSlider &&
            dataSlider?.slice(0, 3)?.map((item) => {
              return (
                <SwiperSlide className="mb-[8rem] rounded-[20px] bg-[#F1FBEB00] bg-[linear-gradient(280deg,_rgba(241,_251,_235,_1)_0%,_rgba(186,_208,_172,_1)_30%,_rgba(174,_198,_158,_1)_70%)]">
                  <div key={item?.id} className="flex">
                    <div className="flex flex-col pt-[8rem] pb-[8rem] pl-[8rem]">
                      <div
                        className="text-[6rem] text-[#FFFFFF] font-[800] mb-[4rem]"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(
                            item?.translations?.find(
                              (item) =>
                                item?.locale ===
                                localStorage.getItem("i18nextLng"),
                            )?.name1,
                          ),
                        }}
                      />
                      <div
                        className="text-[2.4rem] text-[#6F7F7A] font-[500] mb-[6rem]"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(
                            item?.translations?.find(
                              (item) =>
                                item?.locale ===
                                localStorage.getItem("i18nextLng"),
                            )?.name2,
                          ),
                        }}
                      />

                      <div className="flex gap-[2rem]">
                        <button className="bg-[#2F6F62] px-[2.7rem] py-[1.3rem] rounded-[10px] hover:bg-[#808080] transition">
                          <Link
                            className="text-[1.4rem] text-[#FFFFFF] font-[600]"
                            to={item?.btn_link1}
                          >
                            {
                              item?.translations?.find(
                                (item) =>
                                  item?.locale ===
                                  localStorage.getItem("i18nextLng"),
                              )?.btn_name1
                            }
                          </Link>
                        </button>
                        <button className="border-[1px] border-solid border-[#ffffff] rounded-[10px] px-[2rem] hover:bg-[#2F6F62] transition">
                          <Link
                            className="text-[1.4rem] text-[#FFFFFF] font-[600]"
                            to={item?.btn_link2}
                          >
                            {
                              item?.translations?.find(
                                (item) =>
                                  item?.locale ===
                                  localStorage.getItem("i18nextLng"),
                              )?.btn_name2
                            }
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div>
                      <img
                        src={`${import.meta.env.VITE_PICTURE}/${item?.image}`}
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </div>
      </Swiper>
    </>
  );
}
export default HomePageSlider;
