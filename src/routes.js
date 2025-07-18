import About from "./pages/About";
import Login from "./pages/Login";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/login", element: <Login /> },
  { path: "/users/:id", element: <UserProfile /> },
  { path: "*", element: <ErrorPage /> },
];

export default routes;
