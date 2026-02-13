import { useTranslation } from "react-i18next";
import MaxWidth from "../components/MaxWidth/MaxWidth";
import HomePageAbout from "../components/Sections/HomePage/HomePageAbout";
import useGlobalFetch from "../components/useGlobalFetch/useGlobalFetch";

function HomePage(params) {
  const { data } = useGlobalFetch();
  const [t] = useTranslation("translation");
  return (
    <>
      <main>
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
                // cardimg1={`${import.meta.env.VITE_PICTURE}/${data?.abouthome?.image1}`}
              />
            </MaxWidth>
          )}
        </section>
      </main>
    </>
  );
}
export default HomePage;
