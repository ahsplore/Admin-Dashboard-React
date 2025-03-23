import { Routes, Route } from "react-router-dom"
import AdminHackathon from "./pages/AdminHackathon"
import AdminView from "./pages/AdminView"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <div className="flex h-screen bg-gray-100 text-gray-100 overflow-hidden"> 
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br via-gray-100 from-gray-400 opacity-80" />
      <div className="absolute inset-0 backdrop-blur-sm" />
    </div>
    <Sidebar />
      <Routes>
        <Route path="/" element={<AdminView />} />
        <Route path="/hackathon-admin" element={<AdminHackathon />} />
      </Routes>

    </div>
  )
}

export default App
