import { useState } from "react";

//Imagen massamia
import Logo from '../assests/images/logo-masa-mia.png'

// Boton iniciar seccion Usuario Modal
import Modal from "../components/Modal";
import { Link } from 'react-scroll';
// import { useEffect } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  // const [open, setOpen] = useState(false);

  // const handleOpen = () => setOpen(!open);


  // const [products, setProducts] = useState([]);
  // const [filters, setFilters] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {

  //     }
  //     catch (err) {

  //     }
  //   }
  // }, []);

  return (
    <nav className="w-full bg-[#EDDBB3] sticky top-0">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="mx-auto">
              <a href="http://localhost:3000">
                <img src={Logo} alt="Logo Image" style={{ width: '50px' }} />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <div className="items-center justify-center pb-6 md:pb-0 md:pt-1 md:flex">
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  className="placeholder:italic placeholder:text-slate-300 block bg-white w-full h-8 border border-slate-500 rounded-md pl-10 pr-60 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="¿Qué deseas buscar?"
                  type="text"
                  name="search"
                />
              </div>

            </div>

            <ul className="items-center justify-center space-y-7 md:flex md:space-x-11 md:space-y-0 md:pt-4 md:pb-2">
              <li className="text-[#4b433e] hover:text-#primario">
                <Link to="inicio" smooth={true} duration={500} >
                  <a href="#">Inicio</a>
                </Link>

              </li>
              <li className="text-[#4b433e] hover:text-#primario">
                <Link to="menu" smooth={true} duration={500} >
                  <a href="#">Productos</a>
                </Link>
              </li>

              <li className="text-[#4b433e] hover:text-#primario">
                <Link to="inicio" smooth={true} duration={500} >
                  <a href="#">Menú</a>
                </Link>
              </li>

              <li className="text-[#4b433e] hover:text-#primario">
                <Link to="nosotros" smooth={true} duration={500} >
                  <a href="#">Nosotros</a>
                </Link>
              </li>

              <li className="text-[#4b433e] hover:text-#primario">
                <Link to="contacto" smooth={true} duration={500} >
                  <a href="#">Contacto</a>
                </Link>
              </li>

            </ul>
          </div>

        </div>
        {/* Aqui  es carro de compras:*/}
        <div className="hidden space-x-2 md:flex ">
          <a href="/cart">
            <svg
              className="w-10 h-6  text-[#4b433e] hover:text-#primario"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            <span className='bg-blue-700 text-white w-5 h-5 rounded-full absolute top-4 rigth-5 leading-4 px-1'>0</span>
          </a>

          <Modal />

        </div>
      </div>
    </nav>
  );
}
