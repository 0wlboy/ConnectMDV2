import { createRoot } from 'react-dom/client'
import './assets/CSS/main.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch cambia a Routes
import { Login, RegisterClient, RegisterProf, RoleSelection, Map } from './pages/pages.jsx';
const root = createRoot(document.getElementById('root'));

root.render(
  <>
  <Router>
    <Routes> {/* Switch cambia a Routes */}
      <Route path="/" element={<Map />} />
      <Route path="/login" element={<Login />} />
      <Route path="/roleSelection" element={<RoleSelection />} />
      <Route path='/registerClient' element={<RegisterClient />} />
      <Route path='/registerProf' element={<RegisterProf />}/>
    </Routes>
  </Router>
  </>
);