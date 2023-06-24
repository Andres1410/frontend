//Data:
import arrayProducts from "../arrayProducts/arrayProducts";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";

//Componentes:
import CardProduct from "../components/CardProduct";
// componente navbar
import Navbar from "../components/Navbar";

// pedido al backend para traer todos los productos

function Menu() {
  let arrayProductsFiltered;
  const navigate = useNavigate();
  let { menuType } = useParams();
  const menuTypeWithoutHyphen =
    menuType === "nuestros-productos" ? "Nuestros productos" : menuType;

  //traer filtrar productos por id de la base de datos dulce, clasica vegana
  if (menuType === "menu") {
    arrayProductsFiltered = arrayProducts;
  } else {
    arrayProductsFiltered = arrayProducts.filter((item) => item.category === menuType);
  }

  return (
    <>
  <Navbar />
    <div className="px-2">
      
      <div className="flex items-center max-w-[370px] mx-auto py-4">
        <AiOutlineArrowLeft size={18} onClick={() => navigate("/")} />
        <h2 className="font-medium uppercase ml-2 text-xl">{menuTypeWithoutHyphen}</h2>
      </div>
      <div className="grid grid-cols-1 min-[360px]:grid-cols-2 max-w-[370px] gap-4 px-4 mx-auto justify-items-center">
        {/*array Product*/}
        {arrayProductsFiltered.map((item) => (
          <CardProduct key={item.id} data={item} />
        ))}
      </div>
    </div>
    </>
  );
}
export default Menu;
