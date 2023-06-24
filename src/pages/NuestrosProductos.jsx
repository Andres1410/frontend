// componentes
import Navbar from "../components/Navbar";

//data:
import arrayProducts from "../arrayProducts/arrayProducts";

import CardProduct from "../components/CardProduct";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

// pedido al backend para traer todos los productos

function NuestrosProductos() {
  const navigate = useNavigate();

  let arrayProductsFiltered = arrayProducts.filter(
    (item) => item.category === "nuestros productos"
  );

  return (
    <div>
    <Navbar /> 
      <div className="flex items-center max-w-[370px] mx-auto py-4 ml-8">
        <AiOutlineArrowLeft size={18} onClick={() => navigate("/")} />
        <h2 className="font-medium uppercase ml-2 text-l">Nuestros productos</h2>
      </div>
      <div className="grid grid-cols-1 min-[360px]:grid-cols-2 max-w-[370px] gap-4 px-4 mx-auto justify-items-center">
        {arrayProductsFiltered.map((item) => (
          <CardProduct key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
export default NuestrosProductos;
