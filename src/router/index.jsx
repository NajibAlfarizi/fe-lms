import { createBrowserRouter } from "react-router";
import ManagerHomePage from "../pages/manager/home";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import SuccessCheckOutPage from "../pages/SuccesCheckOut";
import LayoutDashboard from "../components/layout";
import ManageCoursesPage from "../pages/manager/courses";
import ManageCreateCoursePage from "../pages/manager/create-course";
import ManageCourseDetailPage from "../pages/manager/course-detail";
import ManageContentCreatePage from "../pages/manager/course-content-create";
import ManageCoursePreviewPage from "../pages/manager/course-preview";
import ManageStudentsPage from "../pages/manager/students";
import StudentPage from "../pages/student";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerHomePage/>,
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
        element: <ManageCoursesPage />,
      },
      {
        path: "/manager/courses/create",
        element: <ManageCreateCoursePage />,
      },
      { 
        path: "/manager/courses/:id", 
        element: <ManageCourseDetailPage />
      },
      {
        path: "/manager/courses/:id/create",
        element: <ManageContentCreatePage />
      },
      { 
        path: "/manager/courses/:id/preview",
        element: <ManageCoursePreviewPage />
      },
      {
        path: "/manager/students",
        element: <ManageStudentsPage />,
      }
    ],
  },
  {
    path:"/students",
    element: <LayoutDashboard isAdmin={false}/>,
    children: [
      {
        index: true,
        element: <StudentPage />
      },
      {
      }
    ]
  }
]);

export default router;
