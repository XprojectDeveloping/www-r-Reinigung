import { Link, NavLink } from "react-router-dom";
import MaxWidth from "../components/MaxWidth/MaxWidth";
import UseGobalFetch from "../components/useGlobalFetch/useGlobalFetch";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Lang from "../components/Language/Lang";
import headerLogo from "../../public/img/header/headerLogo/headerLogo.svg";
import headerSearchIco from "../../public/img/header/headerSearchIco/searchIco.svg";
import useGlobalFetch from "../components/useGlobalFetch/useGlobalFetch";
function Header() {
  const { data } = useGlobalFetch();
  const [t, i18n] = useTranslation("translation");
  const [open, setOpen] = useState(false);
  const langs = ["de", "en"];

  const changeLang = async (lang) => {
    await i18n.changeLanguage(lang);
    setOpen(false);
  };

  const filteredLang = (lang = "de") => {
    return lang != localStorage.getItem("i18nextLng");
  };

  const langFilter = langs?.filter(filteredLang);

  const headerNav = [
    {
      id: 1,
      name: `${
        data?.header?.translations?.find(
          (item) => item?.locale === localStorage?.getItem("i18nextLng"),
        )?.home_page
      }`,
      link: "/",
    },
    {
      id: 2,
      name: `${
        data?.header?.translations?.find(
          (item) => item?.locale === localStorage?.getItem("i18nextLng"),
        )?.about_us
      }`,
      link: "/about",
    },
    {
      id: 3,
      name: `${
        data?.header?.translations?.find(
          (item) => item?.locale === localStorage?.getItem("i18nextLng"),
        )?.services
      }`,
      link: "/services",
    },
    {
      id: 4,
      name: `${
        data?.header?.translations?.find(
          (item) => item?.locale === localStorage?.getItem("i18nextLng"),
        )?.reference_text
      }`,
      link: "/references",
    },
    {
      id: 5,
      name: `${
        data?.header?.translations?.find(
          (item) => item?.locale === localStorage?.getItem("i18nextLng"),
        )?.blog
      }`,
      link: "/blog",
    },
  ];
  return (
    <>
      <header>
        {/* header top */}
        <div className="bg-[#F4F7F3] py-[2rem]">
          <MaxWidth>
            {/* header top content */}
            <div className="flex justify-between">
              <div className="flex gap-[4rem] items-center">
                {headerNav?.map((item) => (
                  <div key={item.id}>
                    <NavLink
                      className={"text-[1.6rem] text-[#1B1B1B] font-[400]"}
                      to={item.link}
                    >
                      {item.name}
                    </NavLink>
                  </div>
                ))}
              </div>
              {/* lang component */}
              <div>
                <Lang
                  toggle={() => setOpen(!open)}
                  swichLang={
                    open && (
                      <div className="absolute mt-6 left-[-20px] top-8 w-[80px] h-[50px] flex flex-col items-center">
                        {langFilter?.map((item, index) => {
                          return (
                            <button
                              onClick={() => changeLang(item)}
                              name="button"
                              type="button"
                              className="text-[#002755] z-[200] text-[1.4rem] font-normal py-[7px] px-[19px] transition_css hover:bg-gray-200 transitions bg-[#ffffff] flex items-center gap-[8px]"
                              key={item.id || index}
                            >
                              {item}
                            </button>
                          );
                        })}
                      </div>
                    )
                  }
                />
              </div>
            </div>
          </MaxWidth>
        </div>
        {/* header bottom */}
        <div className="py-[4rem]">
          <MaxWidth>
            <div className="flex justify-between items-center pb-[4rem] border-b-[1px] border-[#BAD0AC]">
              {/* header bottom logo */}
              <div>
                <img className="max-w-[32rem]" src={headerLogo} alt="logo" />
              </div>
              {/* header bottom links */}
              <div className="flex items-center gap-[4rem]">
                {data?.header_services &&
                  data?.header_services?.map((item) => {
                    return (
                      <div key={item.id}>
                        <NavLink className="text-[1.6rem] font-[600]">
                          {
                            item?.translations?.find(
                              (cur) =>
                                cur?.locale ===
                                localStorage?.getItem("i18nextLng"),
                            )?.service_name
                          }
                        </NavLink>
                      </div>
                    );
                  })}
              </div>

              {/* header bottom button and searc icon */}
              <div>
                {/* header bottom button */}
                <div className="flex items-center gap-[2rem]">
                  {data?.slayder &&
                    data?.slayder?.slice(0, 1).map((item) => {
                      return (
                        <button
                          className="bg-[#2F6F62] py-[1.4rem] px-[2.7rem] rounded-[10px] drop-shadow-[#2F6F6266] hover:bg-[#808080] transition"
                          key={item.id}
                        >
                          <Link
                            className="text-[1.4rem] text-[#ffffff] font-[600]"
                            to={item}
                          >
                            {
                              item?.translations?.find(
                                (cur) =>
                                  cur?.locale ===
                                  localStorage?.getItem("i18nextLng"),
                              )?.btn_name1
                            }
                          </Link>
                        </button>
                      );
                    })}
                  {/* header bottom search system */}
                  <div className="cursor-pointer border-[1px] rounded-[10px] border-[#BBC0C6]">
                    <img
                      className="py-[1rem] px-[1rem]"
                      src={headerSearchIco}
                      alt="search"
                    />
                  </div>
                </div>
              </div>
            </div>
          </MaxWidth>
        </div>
      </header>
    </>
  );
}
export default Header;
