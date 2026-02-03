import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Services from "../pages/Services";
import ServicesSingle from "../pages/ServicesSingle";
import Blog from "../pages/Blog";
import BlogSingle from "../pages/BlogSingle";
import References from "../pages/References";
import { useRoutes } from "react-router-dom";
const PageRouters = () => {
  const page_routers = [
    {
      path: "/",
      element: <HomePage />,
      exact: true,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/services/:id/:slug",
      element: <ServicesSingle />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/blog/:id/:slug",
      element: <BlogSingle />,
    },
    {
      path: "/references",
      element: <References />,
    },
  ];

  const route = useRoutes(page_routers);
  return <>{route}</>;
};
export default PageRouters;
