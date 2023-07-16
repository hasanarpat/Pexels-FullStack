import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Single from "./pages/single/Single";
import Artist from "./pages/artist/Artist";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import "./style.scss";
import Onboarding from "./pages/onboarding/Onboarding";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/single/:id",
        element: <Single />,
      },
      {
        path: "/artist/:id",
        element: <Artist />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/onboarding",
    element: (
      <>
        <Navbar />
        <Onboarding />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Navbar />
        <Register />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login />
      </>
    ),
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
