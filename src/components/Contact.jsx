import { useState } from "react";
import logoMasaMia from "../assests/images/logo-masa-mia.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onMutate = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div name='contacto' className="p-6 flex flex-col gap-4 md:gap-8 justify-center pt-6 md:flex-row">
      <img src={logoMasaMia} alt="logo masa mia" className="mx-auto w-40 h-40" />
      <div className="text-left">
        <h2 className="font-medium text-xl mb-1 uppercase md:font-extrabold md:text-4xl">
          Contacto
        </h2>
        <p className="leading-5 md:font-semibold md:text-2xl">
          ¿Necesitas hablar con nosotros?
        </p>
        <p className="leading-5  md:text-xl">
          Compártenos tu consulta, opinión y/o sugerencia.
        </p>
      </div>

      <main className="w-full mt-2 overflow-hidden md:max-w-md">
        <form onSubmit={onSubmit}>
          <div>
            <label className="block text-sm md:text-xl font-medium text-gray-700 undefined">
              Tu nombre
            </label>
            <div className=" flex flex-col items-start">
              <input
                onChange={onMutate}
                type="text"
                id="name"
                required
                className="bg-#terciario block w-full mt-1 border-b-2 border-t-0 border-x-0  border-b-#primario/[0.73]	 rounded-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm md:text-xl font-medium text-gray-700 undefined">
              Correo electrónico
            </label>
            <div className="flex flex-col items-start">
              <input
                onChange={onMutate}
                type="email"
                id="email"
                required
                className="bg-#terciario block w-full mt-1 border-b-2 border-t-0 border-x-0  border-b-#primario/[0.73]	 rounded-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm md:text-xl font-medium text-gray-700 undefined">
              Celular
            </label>
            <div className="flex flex-col items-start">
              <input
                onChange={onMutate}
                type="number"
                id="phone"
                required
                className="bg-#terciario block w-full mt-1 border-b-2 border-t-0 border-x-0 border-b-#primario/[0.73] rounded-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm md:text-xl font-medium text-gray-700 undefined">
              Mensaje (opcional)
            </label>
            <div className="flex flex-col items-start">
              <textarea
                onChange={onMutate}
                type="text"
                id="message"
                className="min-h-40 bg-#terciario border-b-2 border-t-0 border-x-0 border-b-#primario/[0.73] block w-full mt-1 border-gray-300 rounded-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>

          <div className="flex items-center justify-end mt-4">
            <button
              type="submit"
              className="bg-#primario inline-flex items-center px-4 py-2 ml-4 text-xs md:text-xl font-semibold tracking-widest text-white uppercase"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
export default Contact;
