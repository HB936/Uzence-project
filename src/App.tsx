import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Badge from "./components/Badge"
import Home from "./components/Home";
import Layout from "./components/Layout";
import Accordion from "./components/Accordian";


function App() {
  const routes= createBrowserRouter(
    [
      {
        path:'/',
        element: <Layout/>,
        children:[
          {
            path:'',
            element:<Home/>
          },
          {
            path:'badge',
            element: <Badge label='Hello' variant='primary'/>
          },
          {
            path:'accordion',
            element: <Accordion title='Hello' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae officiis non, consectetur adipisci nostrum quos illum illo facere neque voluptatum rerum recusandae, consequuntur quis doloremque nesciunt ad dignissimos! Vero, nam.'/>
          }
        ]
      }
    ]
  );
  return (
    <>
        <RouterProvider router={routes}/>
    </>
  )
}

export default App
