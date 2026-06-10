import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  // Get correct basename based on environment

  // Set the base URL either if it is called from HOST or directly from microapp
 const getBasename = () => {
   if (window.__POWERED_BY_QIANKUN__) {
     // When running under Qiankun, use the activeRule from host
     return '/app'
   }
   // When running standalone, use the base URL from vite config
   return '/micro-app/'
 }

 // Create router with createBrowserRouter
 // We create route in the microapp
 // / -> Home Component
 // /details -> Details Component
 // the rest -> Home Component
 const router = createBrowserRouter([
   {
     path: "/",
     element: <Home />,
   },
   {
     path: "/details",
     element: <Details  />,
   },
   {
     path: "*",
     element: <Home />, // Catch-all route
   }
 ], {
  // baseURL
   basename: getBasename() // Use the dynamic basename
 })

 return (
   <RouterProvider router={router} />
 )
}

function Home() {
 return <div>Micro-Frontend Home Page</div>
}
function Details() {
 return <div>Micro-Frontend Details component</div>
}


export default App;
