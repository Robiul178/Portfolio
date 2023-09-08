import Home from "./components/Home/Home";
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LaptopBazar from "./components/ProjectDetails/LaptopBazar";
import PoseNclick from "./components/ProjectDetails/PoseNclick";
import DoctorChamber from "./components/ProjectDetails/DoctorChamber";
import CourseHut from "./components/ProjectDetails/CourseHut";
import Blog from "./components/Home/Blog/Blog";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  }, 
  {
    path: '/laptopBazar',
    element: <LaptopBazar></LaptopBazar>
  },
  {
    path: '/doctorChamber',
    element: <DoctorChamber></DoctorChamber>
  },
  {
    path: '/poseNclick',
    element: <PoseNclick></PoseNclick>
  },
  {
    path: '/courseHut',
    element: <CourseHut></CourseHut>
  },
  {
    path: '/blog',
    element: <Blog></Blog>
  },

])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
