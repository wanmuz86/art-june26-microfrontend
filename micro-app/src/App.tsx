import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
function App(props: MicroAppProps) {


  // To make it simple we read the prop on console  
  // when the micro app load for the first time
   useEffect(() => {
   if (props.initialData) {
     console.log('Received initial data:', props.initialData.message)
   }
 }, [props.initialData])



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
     element: <Details  {...props} />,
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

// Props needs to be passed down from App component
function Details(props: MicroAppProps) {
  // Defining UI that will pass up data (button clicked)
  // We can also see the data retrieved from host in the UI

   const handleSendData = () => {
   if (props.onDataReceived) {
     console.log("Sending data to host")
     props.onDataReceived('Data from micro-app: ' + new Date().toLocaleString())
   }
 }

 return  <div>
     <h2>Micro-Frontend Details Page</h2>
     {props.initialData && (
       <p>Message from host: {props.initialData.message}</p>
     )}
     <button onClick={handleSendData}>Send Data to Host</button>
   </div>

}


export default App;
