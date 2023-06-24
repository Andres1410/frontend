import { AiOutlineArrowRight } from "react-icons/ai";
import RowProductCard from "./RowProductCard";
import { Link } from "react-router-dom";
import { WindowSizeHook } from "../helpers/WindowSizeHook";

function MenuRow({ title, routePath }) {
  const { width } = WindowSizeHook();

  return (
    
    <div className="px-6 md:mt-10 max-w-5xl mx-auto">
      <div className="flex flex-row justify-between">
        {width < 768 && (
          <>
            <p className="font-medium text-xl mb-1 uppercase">{title}</p>
            <Link to="/category/menu" className="flex items-center">
              <p className="mr-2">Ver todo</p>
              <AiOutlineArrowRight />
            </Link>
          </>
        )}
      </div>
      <div>
        <RowProductCard routePath={routePath} />
      </div>
    </div>
  );
}
export default MenuRow;
