import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// traer el producto a editar identificado con "id", llenar el formulario
// y al actualizar mandar producto a la base de datos

function EditarProducto() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    url: "",
    category: "",
    price: "",
    name: "",
    description: "",
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
    <>
      <div className="flex items-center max-w-[370px] mx-auto py-4 ml-8">
        <AiOutlineArrowLeft size={18} onClick={() => navigate("/")} />
        <h2 className="font-medium uppercase ml-2 text-l">Editar Producto</h2>
      </div>
      <div className="px-6 flex flex-col gap-4 md:gap-8 justify-center md:flex-row">
        <main className="w-full mt-5 overflow-hidden md:max-w-md rounded-lg">
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block mb-1 text-sm md:text-xl font-medium text-gray-700 undefined">
                URL de la imagen
              </label>
              <div className=" flex flex-col items-start">
                <input
                  onChange={onMutate}
                  type="text"
                  id="url"
                  required
                  className="bg-slate-200 p-2 block w-full mt-1 border-gray-300 rounded-sm shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm md:text-xl font-medium text-gray-700 undefined">
                Categoría
              </label>
              <div className=" flex flex-col items-start">
                <input
                  onChange={onMutate}
                  type="text"
                  id="category"
                  required
                  className="bg-slate-200 p-2 block w-full mt-1 border-gray-300 rounded-sm shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm md:text-xl font-medium text-gray-700 undefined">
                Precio del producto
              </label>
              <div className=" flex flex-col items-start">
                <input
                  onChange={onMutate}
                  type="text"
                  id="price"
                  required
                  className="bg-slate-200 p-2 block w-full mt-1 border-gray-300 rounded-sm shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm md:text-xl font-medium text-gray-700 undefined">
                Nombre del producto
              </label>
              <div className=" flex flex-col items-start">
                <input
                  onChange={onMutate}
                  type="text"
                  id="name"
                  required
                  className="bg-slate-200 p-2 block w-full mt-1 border-gray-300 rounded-sm shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm md:text-xl font-medium text-gray-700 undefined">
                Descripción del producto
              </label>
              <div className="flex flex-col items-start">
                <textarea
                  onChange={onMutate}
                  type="text"
                  id="description"
                  className="min-h-40	 bg-slate-200 block w-full mt-1 border-gray-300 rounded-sm shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="flex items-center justify-end mt-4">
              <button
                type="submit"
                className="bg-slate-500 w-full py-2 text-xs md:text-xl font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-md active:bg-gray-900 false"
              >
                Actualizar Producto
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
export default EditarProducto;
