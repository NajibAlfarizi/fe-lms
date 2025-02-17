import { createBrowserRouter } from "react-router";
import ManagerHome from "../pages/manager/home";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import SuccessCheckOutPage from "../pages/SuccesCheckOut";
import LayoutDashboard from "../components/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerHome />,
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
    element: <SuccessCheckOutPage />
  },
  {
    path:"/manager",
    element: <LayoutDashboard />,
    children: [
      {
        index: true,
        element: <ManagerHome />
      }
    ]
  }
]);

export default router;