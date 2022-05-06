import Home from "./pages/client/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/manager/Login'
import AboutUs from './pages/client/AboutUs'

import NotFoundPage from './pages/NotFoundPage'



function App() {
  return (
    <Router>
      <Routes>
        {/* <div className="App">
        </div> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </Router>
  );
}

export default App;
