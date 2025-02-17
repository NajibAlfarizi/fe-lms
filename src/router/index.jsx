import { createBrowserRouter } from "react-router";
import ManagerHome from "../pages/ManagerHome";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import SuccessCheckOutPage from "../pages/SuccesCheckOut";

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
  }
]);

export default router;