import { useTranslation } from "react-i18next";
import MaxWidth from "../components/MaxWidth/MaxWidth";
import useGlobalFetch from "../components/useGlobalFetch/useGlobalFetch";
function About(params) {
  const { data } = useGlobalFetch();
  const [t] = useTranslation("translation");
  return (
    <>
      <section className="">
        <MaxWidth>
          {data?.abouthome && (
            <AboutHome
              title={
                data?.abouthome?.translations?.find(
                  (item) =>
                    item?.locale === localStorage?.getItem("i18nextLng"),
                )?.head_text1
              }
              cardimg1={`${import.meta.env.VITE_PICTURE}/${data?.abouthome?.image1}`}
            />
          )}
        </MaxWidth>
      </section>
    </>
  );
}
export default About;
