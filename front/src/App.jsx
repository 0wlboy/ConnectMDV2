import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth } from "./components/context/AuthContext.jsx"; // Asegúrate de que la ruta sea correcta
import {
  Login,
  RegisterClient,
  RegisterProf,
  RoleSelection,
  Map,
  RecoverPassword
} from "./pages/pages.jsx";

function App() {
  const { isAuthenticated, userRole } = useAuth();
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Map />} />
        {/* Rutas que no puedes acceder si ya has iniciado sesion*/}
        {!isAuthenticated && (
          <>
            <Route path="/roleSelection" element={<RoleSelection />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recoverPassword" element={<RecoverPassword />} />
            <Route path="/registerClient" element={<RegisterClient />} />
            <Route path="/registerProf" element={<RegisterProf />} />
          </>
        )}
        {/* Rutas protegidas */}
        {isAuthenticated && userRole === "client" && <></>}
        {isAuthenticated && userRole === "prof" && <></>}
        {isAuthenticated && userRole === "admin" && <></>}
      </Routes>
    </Router>
  );
}

export default App;
