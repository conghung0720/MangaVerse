import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "../pages/Home/index";
import ListChapter from "../pages/ListPage";
import Details from "../pages/Details";
import Chapter from "../pages/Chapter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/list-chapter",
    element: <ListChapter />,
  },
  {
    path: "/details/:nameOfComics",
    element: <Details />,
  },
  {
    path: "/details/:nameOfComics/:chapter",
    element: <Chapter />,
  },
]);

export default router;
