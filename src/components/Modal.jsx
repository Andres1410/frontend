// import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";

//contacto
import user from "../assests/images/user.png";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <img class="w-10 z-0 text-sm px-1 py-1 cursor-pointer" src={user} alt="user" type="button"
        onClick={() => setShowModal(true)} />
      {showModal ? (
        <>
          <div class=" z-[40] justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none ">
            <div class="relative w-auto my-6 mx-auto max-w-3xl  ">
              {/*content*/}
              <div class="border-0  shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
                <div class="grid grid-cols-2 gap-4 ...">
                  <div class="place-self-auto self-start ">
                    <h2 class=" mt-3 text-3xl font-bold tracking-tight text-gray-900 indent-8">
                      Iniciar sesión
                    </h2>
                  </div>
                  <div class="place-items-right  flex justify-end">
                    <button
                      class="text-black-500  cursor-pointer font-bold uppercase text-sm px-6 py-3  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      x
                    </button>
                  </div>
                </div>

                <div className="grid grid-flow-row-dense  grid-rows-2 ...">
                  _________________________________________________________________
                </div>

                <input type="hidden" name="remember" defaultValue="true" />

                <div className="grid gap-x-8 gap-y-4  flex justify-center ">

                  {/*metodo GET para pedir peticion al Backend*/}
                  <form action="/" method="GET">

                    <div>

                      <label htmlFor="email" className="sr-only" >
                        Email address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        class="relative block  appearance-none rounded rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="email"
                      />

                    </div>

                    <br />

                    <div>

                      <label htmlFor="password" class="sr-only" for="password">
                        Password
                      </label>

                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        class="relative block  appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Password"
                      />
                    </div>

                    <br />

                    <div>
                      <button
                        type="submit"
                        class="group relative flex w-min justify-center rounded-md border border-transparent bg-[#C96C26] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2; transition ease-in-out delay-150 bg-[#C96C26] hover:-translate-y-1 hover:scale-110  duration-300 ..."
                      >
                        Ingresar
                      </button>
                    </div>

                    <br />

                    <div>
                      <Link
                        to="/olvide"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Olvide contraseña?
                      </Link>
                    </div>
                  </form>
                </div>

                <div class="flex justify-between ...">
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
          <div class="opacity-50 fixed inset-0  bg-black"></div>
        </>
      ) : null}
    </>
  );
}
