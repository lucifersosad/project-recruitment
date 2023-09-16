import LayoutAdmin from "../components/Layout/LayoutAdmin";
import LayoutDefault from "../components/Layout/LayoutDefault";
import PrivateRoute from "../components/PrivateRoute";
import CVManage from "../pages/CVManage";
import Company from "../pages/Company";
import CompanyDetail from "../pages/Company/CompanyDetail";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import InfoCompany from "../pages/InfoCompany";
import JobDetail from "../pages/JobDetail";
import JobDetailAdmin from "../pages/JobManage/JobDetail";
import JobManage from "../pages/JobManage";
import CreateJob from "../pages/JobManage/CreateJob";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Register from "../pages/Register";
import Search from "../pages/Search";
import CVDetail from "../pages/CVManage/CVDetail";

export const routes = [
  //Public
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "logout",
        element: <Logout />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "search",
        element: <Search />
      },
      {
        path: "company",
        element: <Company />
      },
      {
        path: "company/:id",
        element: <CompanyDetail />
      },
      {
        path: "job/:id",
        element: <JobDetail />
      },
    ]
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <LayoutAdmin />,
        children: [
          {
            path: "admin",
            element: <Dashboard />
          },
          {
            path: "info-company",
            element: <InfoCompany />
          },
          {
            path: "job-manage",
            element: <JobManage />
          },
          {
            path: "cv-manage",
            element: <CVManage />
          },
          {
            path: "create-job",
            element: <CreateJob />
          },
          {
            path: "detail-job/:id",
            element: <JobDetailAdmin />
          },
          {
            path: "detail-cv/:id",
            element: <CVDetail/>
          },
        ]
      }
    ]
  }
]