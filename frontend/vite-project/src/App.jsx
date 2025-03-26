import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Login from './components/Login'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" style={{ backgroundImage: "url('/image.jpg')" }}>
      <BrowserRouter basename="/">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
