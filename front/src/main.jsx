import { createRoot } from "react-dom/client";
import "./assets/CSS/main.css";
import "flowbite-react";
import App  from "./App.jsx";
import { AuthProvider } from "./components/context/AuthContext.jsx"; // Importar el proveedor de autenticación

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <AuthProvider>
      <App />
    </AuthProvider>
  </>
);
