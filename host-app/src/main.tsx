import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { registerMicroApps, start } from 'qiankun';



import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// DEFINE THE ROUTE
// Create routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",    // Everything that started with / -> App.tsx (Host app)
    element: <App />,
  },
  {
    path: "/app/*",  // Everyhing that started with /app -> Will show the container for the microapp 
    element: <div id="micro-app-container"></div>,
  },
  {
    path: "*",   /// Page not found
    element: <div>Page not found</div>,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


// Register micro-app
// We will have one application that is going to run on port 4173
// This is a microapp called react-app
// the route to open this microapp is /app

// The microapp will be shown in the container #micro-app-container
registerMicroApps([
  {
    name: 'react-app',
    entry: '//localhost:4173/micro-app/',
    container: '#micro-app-container',
    activeRule: '/app', // route in host app
  },
]);

start({
  prefetch: true,
  sandbox: {
    strictStyleIsolation: true // Each microservice run in their own isolation
  }
}
);
