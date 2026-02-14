import { useTranslation } from "react-i18next";
import MaxWidth from "../components/MaxWidth/MaxWidth";
import HomePageAbout from "../components/Sections/HomePage/HomePageAbout";
import useGlobalFetch from "../components/useGlobalFetch/useGlobalFetch";
import HomePageSlider from "../components/Sections/HomePage/HomePageSlider";

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
      </main>
    </>
  );
}
export default HomePage;
