import Navbar from './components/Navbar'
import Home from './components/Home'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footerr from './components/Footerr'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './components/responsive.css'
import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar />
        <Home />
        <Footerr /></>
    },
    {
      path: "/Resume",
      element: <><Navbar /><Resume /><Footerr /></>
    },
    {
      path: "/Projects",
      element: <><Navbar /><Projects /><Footerr /></>
    },
    {
      path: "/Contact",
      element: <><Navbar /><Contact /><Footerr /></>
    }
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
