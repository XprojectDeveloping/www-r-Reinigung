import { useTranslation } from "react-i18next";
import MaxWidth from "../components/MaxWidth/MaxWidth";
import HomePageAbout from "../components/Sections/HomePage/HomePageAbout";
import useGlobalFetch from "../components/useGlobalFetch/useGlobalFetch";
import HomePageSlider from "../components/Sections/HomePage/HomePageSlider";
import HomePageServicesHeader from "../components/Sections/HomePage/HomePageServicesHeader";
import HomePageServicesCard from "../components/Sections/HomePage/HomePageServicesCards";
import HomePageServices from "../components/Sections/HomePage/HomePageSevices";

function HomePage(params) {
  const { data } = useGlobalFetch();
  const [t] = useTranslation("translation");
  return (
    <>
      <main>
        <section>
          {data.slayder && (
            <MaxWidth>
              <HomePageSlider dataSlider={data.slayder} />
            </MaxWidth>
          )}
        </section>
        <section>
          {data.abouthome && (
            <MaxWidth>
              <HomePageAbout
                title={
                  data?.abouthome?.translations?.find(
                    (item) =>
                      item?.locale === localStorage?.getItem("i18nextLng"),
                  )?.head_text1
                }
                text={
                  data?.abouthome?.translations?.find(
                    (item) =>
                      item?.locale === localStorage?.getItem("i18nextLng"),
                  )?.head_text2
                }
                titleButtonText={
                  data?.abouthome?.translations?.find(
                    (item) =>
                      item?.locale === localStorage?.getItem("i18nextLng"),
                  )?.btn_name
                }
                cardimg1={`${import.meta.env.VITE_PICTURE}/${data?.abouthome?.image1}`}
                cardimg2={`${import.meta.env.VITE_PICTURE}/${data?.abouthome?.image2}`}
                cardimg3={`${import.meta.env.VITE_PICTURE}/${data?.abouthome?.image3}`}
                cardimg4={`${import.meta.env.VITE_PICTURE}/${data?.abouthome?.image4}`}
                cardtext1={
                  data.abouthome?.translations.find(
                    (item) =>
                      item?.locale === localStorage.getItem("i18nextLng"),
                  )?.text1
                }
                cardtext2={
                  data.abouthome?.translations.find(
                    (item) =>
                      item?.locale === localStorage.getItem("i18nextLng"),
                  )?.text2
                }
                cardtext3={
                  data.abouthome?.translations.find(
                    (item) =>
                      item?.locale === localStorage.getItem("i18nextLng"),
                  )?.text3
                }
                cardtext4={
                  data.abouthome?.translations.find(
                    (item) =>
                      item?.locale === localStorage.getItem("i18nextLng"),
                  )?.text4
                }
              />
            </MaxWidth>
          )}
        </section>
        <section>
          {data?.servicesheader && (
            <MaxWidth>
              <HomePageServicesHeader
                title={
                  data?.servicesheader?.translations?.find(
                    (item) =>
                      item?.locale === localStorage?.getItem("i18nextLng"),
                  )?.text1
                }
                titleButtonText={
                  data?.servicesheader?.translations?.find(
                    (item) =>
                      item?.locale === localStorage?.getItem("i18nextLng"),
                  )?.text1
                }
                text={
                  data?.servicesheader?.translations?.find(
                    (item) =>
                      item?.locale === localStorage?.getItem("i18nextLng"),
                  )?.text6
                }
              />
            </MaxWidth>
          )}

          {data?.services && (
            <MaxWidth>
              <HomePageServicesCard dataCard={data?.services} />
            </MaxWidth>
          )}
        </section>

        <section>
          {data?.proces && (
            <MaxWidth>
              <HomePageServices
                title={
                  data?.proces?.translations?.find(
                    (item) =>
                      item?.locale === localStorage?.getItem("i18nextLng"),
                  )?.title
                }
                titleButtonText={
                  data?.proces?.translations?.find(
                    (item) =>
                      item?.locale === localStorage?.getItem("i18nextLng"),
                  )?.button_name
                }
                text={
                  data?.proces.translations?.find(
                    (item) =>
                      item?.locale === localStorage?.getItem("i18nextLng"),
                  )?.text
                }
                text2={
                  data?.proces?.translations?.find(
                    (item) =>
                      item?.locale === localStorage?.getItem("i18nextLng"),
                  )?.name2
                }
                img1={`${import.meta.env.VITE_PICTURE}/${data?.proces?.image1}`}
                img2={`${import.meta.env.VITE_PICTURE}/${data?.proces?.image2}`}
              />
            </MaxWidth>
          )}
        </section>
      </main>
    </>
  );
}
export default HomePage;
