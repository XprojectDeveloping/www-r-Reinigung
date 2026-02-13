import { AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <>
      <Header />
      <AnimatePresence>{children}</AnimatePresence>
      <Footer />
    </>
  );
}
export default Layout;
