import { useTranslation } from "react-i18next";
import MaxWidth from "../components/MaxWidth/MaxWidth";
import useGlobalFetch from "../components/useGlobalFetch/useGlobalFetch";
function About(params) {
  const { data } = useGlobalFetch();
  const [t] = useTranslation("translation");
  return <>about</>;
}
export default About;
