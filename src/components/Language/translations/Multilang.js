const getMultiLang = (de, en) => {
  const lang = localStorage.getItem("i18nextLng");

  if (lang === "de") {
    return de;
  } else if (lang === "en") {
    return en;
  } else {
    return de;
  }
};
export { getMultiLang };
