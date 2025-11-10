import {createBrowserRouter, RouterProvider, Route, Outlet, Navigate} from "react-router-dom"
import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Detail from "./pages/detail/Detail";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Upload from "./pages/upload/Upload";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.css"
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
function App() {
  const {currentUser} = useContext(AuthContext);

  const queryClient = new QueryClient();


  const Layout = () => {
    return(
      <QueryClientProvider client={queryClient}>
      <div>
        <Navbar/>
        <div style={{display:"flex"}}>
          <Leftbar/>
          <div style={{ flex: 10 }}>
            <Outlet/>
          </div>
        </div>
      </div>
      </QueryClientProvider>
    )
  }

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>,
      children: [
      {
      path: "/",
      element: <Home/>
      },
      {
      path: "/profile/:id",
      element: <Profile/>
      },
      {
      path: "/upload/:id",
      element: <Upload/>
      },
      {
      path: "/detail/:id",
      element: <Detail/>
      },
      ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
