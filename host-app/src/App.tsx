import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
 const navigate = useNavigate()

 const navigateToMicroApp = () => {
  // This button will open /app/details route
  // microapp , microapp always start with /app/*
  // Navigate to the microapp
   navigate('/app/details')
 }

 return (
   <div>
     <h1>Host Application</h1>
     <button onClick={navigateToMicroApp}>Go to Micro-App Details</button>
   </div>
 )
}
export default App
