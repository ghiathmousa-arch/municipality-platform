import { createBrowserRouter } from "react-router"
import { RootLayout } from "../components/layout/RootLayout"

import { HomePage } from "../pages/HomePage"
import { NotFoundPage } from "../pages/NotFoundPage"
import { CategoriesPage } from "../pages/CategoriesPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "categories", element: <CategoriesPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
])