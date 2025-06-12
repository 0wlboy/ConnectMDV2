import { useState } from "react";
import { Mail } from "lucide-react";

function RecoverPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el email de recuperación
    console.log("Email para recuperación:", email);
    // Aquí iría la llamada a la API, etc.
  };

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="z-10 w-full max-w-md  rounded-lg shadow-lg p-6">
          <form className="max-w-sm mx-auto p-5" onSubmit={handleSubmit}>
            <label
              htmlFor="email-address-icon"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Ingresa tu Email
            </label>
            <div className="relative mb-6"> {/* Añadido margen inferior */}
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <Mail
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="email"
                id="email-address-icon"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Enviar Instrucciones
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default RecoverPassword;
