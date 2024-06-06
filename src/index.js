import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeDashboard from "./pages/home/HomeDashboard";
import { Helmet } from "react-helmet";
import AboutUs from "./pages/aboutus/AboutUs";
import Services from "./pages/services/Services";
import Career from "./pages/career/Career";
import Blog from "./pages/blog/Blog";
import Help from "./pages/help/Help";
import Plans from "./pages/plans/Plans";
import Modal from "react-modal";
import ReactModal from "react-modal";

import PDFPage from "./component/pdfviewer/PDFViewer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeDashboard />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/plans",
    element: <Plans />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/about-us/privacy-policy",
    element: (
      <PDFPage
        url={
          "https://pdfdocs-saayurcare.s3.eu-north-1.amazonaws.com/Privacy+Policy++(Website+%26+APP).pdf"
        }
      />
    ),
  },
  {
    path: "/about-us/cancellation-refund",
    element: (
      <PDFPage
        url={
          "https://pdfdocs-saayurcare.s3.eu-north-1.amazonaws.com/CANCELLATION+%26+REFUND+POLICY.pdf"
        }
      />
    ),
  },
  {
    path: "/about-us/terms-and-conditions",
    element: (
      <PDFPage
        url={
          "https://pdfdocs-saayurcare.s3.eu-north-1.amazonaws.com/T%26C+-+WEBSITE.pdf"
        }
      />
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

ReactModal.setAppElement("#root");

root.render(
  <div>
    <Helmet>
      <title>Aayurcare</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        rel="stylesheet"
        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <RouterProvider router={router} />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
