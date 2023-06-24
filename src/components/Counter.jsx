import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

function Counter({ stock, onAdd, initial = 1 }) {
  const [count, setCount] = useState(parseInt(initial));

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  useEffect(() => {
	setCount(parseInt(initial));
  }, [initial])

  return (
    <div>
      <div className="flex justify-center items-center border w-fit mx-auto border-#231E1A">
        <button
          className="pb-[1px] bg-#terciario px-2 border-r border-#231E1A"
		  disabled={count <=1}
          onClick={decrease}
        >
          -
        </button>
        <h1 className="pb-[1px] bg-#terciario px-3 border-r border-#231E1A">{count}</h1>
        <button className="pb-[1px] bg-#terciario px-2" 
		disabled={count >= stock}
		onClick={increase}>
          +
        </button>
      </div>

      {/* Comentario: Boton carro shoping*/}
      <button
        className="mt-2 mx-auto p-2 rounded flex items-center uppercase  justify-center text-[11px] text-white bg-#primario"
        disabled={stock <= 0}
		onClick={() => onAdd(count)}
      >
        <FaShoppingCart className="text-white mr-1" size={15} />
        Añadir al carrito 
      </button>
    </div>
  );
}
export default Counter;