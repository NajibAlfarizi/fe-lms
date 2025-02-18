import { createBrowserRouter } from "react-router";
import ManagerHomePage from "../pages/manager/home";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import SuccessCheckOutPage from "../pages/SuccesCheckOut";
import LayoutDashboard from "../components/layout";
import ManageCoursesPage from "../pages/manager/courses";
import ManageCreateCoursePage from "../pages/manager/create-course";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerHomePage />,
  },
  {
    path: "/manager/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/manager/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/success-checkout",
    element: <SuccessCheckOutPage />,
  },
  {
    path: "/manager",
    element: <LayoutDashboard />,
    children: [
      {
        index: true,
        element: <ManagerHomePage />,
      },
      {
        path: "/manager/courses",
        element: <ManageCoursesPage />
      },
      {
        path: "/manager/courses/create",
        element: <ManageCreateCoursePage />
      }
    ],
  },
]);

export default router;