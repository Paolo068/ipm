import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import SignUp from "./components/pages/Signup";
import SignIn from "./components/pages/Signin";
import Home from "./components/pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
