import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Parent from "./Pages/Parent";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Category from "./Pages/Category";

import { HelmetProvider } from "react-helmet-async";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import Cart from "./Pages/Cart";
import PaymentHis from "./Pages/PaymentHis";
import DashboardLayout from "./Layout/DashboardLayout";
import AdminHome from "./Pages/Dashboard/AdminHome";
import ManageUsers from "./Pages/Dashboard/ManageUsers";
import ManageCategory from "./Pages/Dashboard/ManageCategory";
import PaymentManagement from "./Pages/Dashboard/PaymentManagement";
import SalesReport from "./Pages/Dashboard/SalesReport";
import ManageBannerAdd from "./Pages/Dashboard/ManageBannerAdd";

import SellerDashLayout from "./Layout/SellerDashLayout";
import SellerHome from "./Pages/SellerDashboard/SellerHome";
import ManageMedicines from "./Pages/SellerDashboard/ManageMedicines";
import PaymentHistory from "./Pages/SellerDashboard/PaymentHistory";
import AskForAdd from "./Pages/SellerDashboard/AskForAdd";
import MediDetails from "./Pages/MediDetails";
import Shop from "./Pages/Shop";
import UpdateProfile from "./Pages/UpdateProfile";
import PrivateRoute from "./Pages/PrivateRoute";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent></Parent>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://final-assign-server.vercel.app/category"),
      },
      {
        path: "category/:No",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`https://final-assign-server.vercel.app/category/${params.No}`),
      },
      {
        path: "/medidetails",
        element: <Shop></Shop>,
        loader: () => fetch(`https://final-assign-server.vercel.app/medidetails`),
      },
      {
        path: "/medidetails/:id",
        element: <PrivateRoute><MediDetails></MediDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://final-assign-server.vercel.app/medidetails/${params.id}`),
      },

      {
        path: "/updateprofile",
        element: <UpdateProfile></UpdateProfile>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: "home",
        element: <AdminHome />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "manage-category",
        element: <ManageCategory />,
      },
      {
        path: "payment-manage",
        element: <PaymentManagement />,
      },
      {
        path: "sales-report",
        element: <SalesReport />,
      },
      {
        path: "manage-banner",
        element: <ManageBannerAdd />,
      },
      {
        path: "sellerhome",
        element: <SellerHome />,
      },
      {
        path: "manage-medicine",
        element: <ManageMedicines />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "ask-add",
        element: <AskForAdd />,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payhistory",
        element: <PaymentHis></PaymentHis>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <FirebaseProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </FirebaseProvider>
    </HelmetProvider>
  </React.StrictMode>
);
