import React, { useState } from "react";
import {useAuth} from "../context/AuthContext"
import { LogOut } from "lucide-react";
import {useNavigate} from 'react-router-dom';

function SideBar() {
  const {logout} = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const logOutButton = async () => {
    await logout();
    setIsOpen(false);
    navigate("/login");

  }

  return (
    <>
      <div className="text-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          onClick={toggleDrawer}
        >
          Show navigation
        </button>
      </div>

      {isOpen && (
        <div
          id="drawer-navigation"
          className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800"
          tabIndex={-1}
          aria-labelledby="drawer-navigation-label"
        >
          <a href="https://flowbite.com/" className="flex items-center ps-2.5 mb-5">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 me-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <button
            type="button"
            onClick={toggleDrawer}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="pt-10 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 gap-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <LogOut/>
                  <span className="ms-3 ">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 gap-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  onClick={logOutButton} // Cambiado aquí
                >
                  <LogOut className="text-red-600"/>
                  <span className="ms-3 ">Cerrar Sesion</span>
                </a>
              </li>
              {/* Más elementos de la lista... */}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default SideBar;
