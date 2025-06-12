import { useState, useContext } from "react"; // Agrega useContext si vas a usar RecoveryContext para setear valores
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RecoveryContext } from "../main"; // Asegúrate que la ruta sea correcta

export default function SendEmail() { // Nombre del componente corregido
  const [email, setEmail] = useState(''); // Correcta inicialización del estado para el email
  const [generatedOTP, setGeneratedOTP] = useState(null); // Estado para el OTP generado localmente. Renombrado para claridad.
  const navigate = useNavigate();
  const { setEmail: setEmailContext, setOtp: setOtpContext } = useContext(RecoveryContext); // Usar el contexto

   function nagigateToOtp() {
    if (email) {
      const newOTP = Math.floor(Math.random() * 9000 + 1000);
      console.log(newOTP);
      setGeneratedOTP(newOTP); // Guarda el OTP generado en el estado local

      axios
        .post("http://localhost:3001/api/users/send_recovery_email", {
          OTP: newOTP, // Usa el OTP recién generado
          recipient_email: email,
        })
        .then(() => {
          // Aquí deberías actualizar el RecoveryContext si es necesario
          setEmailContext(email); // Actualiza el email en el contexto
          setOtpContext(newOTP);  // Actualiza el OTP en el contexto
          alert("Código de recuperación enviado a tu email.");
          navigate("/RecoverPassword"); // Navega a la ruta correcta después del éxito
        })
        .catch(console.log);
      return;
    }
    return alert("Please enter your email");
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-50">
      <div className="bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Enviar Email</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>Ingresa tu email para enviar el código de recuperación.</p>
            </div>
          </div>

          <div>
            <form>
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  <div className="mb-6 w-full"> {/* Asegúrate que el div ocupe el ancho necesario */}
                    <label
                      for="default-input"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Default input
                    </label>
                    <input
                      type="text"
                      id="default-input"
                      value={email} // Vinculado al estado 'email'
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <a
                      onClick={nagigateToOtp}
                      className="flex flex-row cursor-pointer items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                    >
                      Enviar Codigo
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
