import { AiOutlineArrowRight } from "react-icons/ai";
import RowProductCard from "./RowProductCard";
import { Link } from "react-router-dom";
import { WindowSizeHook } from "../helpers/WindowSizeHook";

function NuestrosProductosRow({ title, routePath }) {
  const { width } = WindowSizeHook();

  return width > 768 ? null : (
    <div className="px-6">

      <div className="flex flex-row justify-between mb-1">
        <p className="font-medium text-xl mb-1 uppercase">{title}</p>
        <div className="flex items-center">
          <Link to="/nuestros-productos">
            <p className="mr-2">Ver todo</p>
          </Link>
          <AiOutlineArrowRight />
        </div>
      </div>
      <div>
        <RowProductCard routePath={routePath} />
      </div>
    </div>
  );
}
export default NuestrosProductosRow;
