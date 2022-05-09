import Home from "./pages/client/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/manager/login/Login'
import AboutUs from './pages/client/AboutUs'
import Rooms from './pages/client/Rooms'

import NotFoundPage from './pages/NotFoundPage'
import Dashboard from "./pages/manager/dashboard/Dashboard";



function App() {
  return (
    <Router>
      <Routes>
        {/* <div className="App">
        </div> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
        <Route path="/rooms/:TypeRoomId" element={<Rooms />} />
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </Router>
  );
}

export default App;
