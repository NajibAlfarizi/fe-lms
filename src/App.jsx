import { createBrowserRouter, RouterProvider } from "react-router"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-3xl text-amber-800">Hello world</div>
  }
])
function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
