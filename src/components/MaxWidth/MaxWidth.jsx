const MaxWidth = ({ customClass = "", children }) => {
  return (
    <div className={`${customClass} max-w-[1420px] m-auto`}>{children}</div>
  );
};
export default MaxWidth;
