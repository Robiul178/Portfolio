import Home from "./components/Home/Home";
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from "./components/Home/Blog/Blog";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
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
