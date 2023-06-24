import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// pedido al backend para traer todos los productos

function AgregarProducto() {
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
      <div className="mx-auto px-6 max-w-4xl">
        <div className="flex items-center py-4">
          <AiOutlineArrowLeft size={28} onClick={() => navigate("/")} />
          <h2 className="font-medium uppercase w-full  md:text-2xl md:font-bold text-center text-l">
            Agregar Nuevo Producto
          </h2>
        </div>
      </div>
      <div className="px-6 flex flex-col gap-4 md:gap-8 justify-center mx-auto max-w-xl desktop:max-w-2xl">
        <main className="w-full mt-5 overflow-hidden rounded-lg">
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block mb-1 text-sm md:text-xl font-medium text-gray-700">
                URL de la imagen
              </label>
              <div>
                <input
                  onChange={onMutate}
                  type="text"
                  id="url"
                  required
                  className="bg-slate-200 p-2 block w-full mt-1 rounded-sm shadow-sm"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm md:text-xl font-medium text-gray-700">
                Categoría
              </label>
              <div>
                <input
                  onChange={onMutate}
                  type="text"
                  id="category"
                  required
                  className="bg-slate-200 p-2 block w-full mt-1 rounded-sm shadow-sm"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm md:text-xl font-medium text-gray-700">
                Precio del producto
              </label>
              <div>
                <input
                  onChange={onMutate}
                  type="text"
                  id="price"
                  required
                  className="bg-slate-200 p-2 block w-full mt-1 rounded-sm shadow-sm"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm md:text-xl font-medium text-gray-700">
                Nombre del producto
              </label>
              <div>
                <input
                  onChange={onMutate}
                  type="text"
                  id="name"
                  required
                  className="bg-slate-200 p-2 block w-full mt-1 rounded-sm shadow-sm"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm md:text-xl font-medium text-gray-700">
                Descripción del producto
              </label>
              <div className="flex flex-col items-start">
                <textarea
                  onChange={onMutate}
                  type="text"
                  id="description"
                  className="min-h-40 bg-slate-200 block w-full mt-1 rounded-sm shadow-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-end mt-4">
              <button
                type="submit"
                className="bg-slate-500 w-full py-2 text-xs md:text-xl font-semibold tracking-widest text-white uppercase rounded-md active:bg-gray-900"
              >
                Agregar Producto
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
export default AgregarProducto;
