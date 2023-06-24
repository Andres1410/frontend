import image1 from "../assests/images/image1.jpg";
import { WindowSizeHook } from "../helpers/WindowSizeHook";
import { Link } from "react-router-dom";

function RowProductCard({ routePath }) {
  const { width } = WindowSizeHook();

  return routePath === "menu" ? (
    <div name='menu' className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-3 justify-items-center">
      <div className="rounded overflow-hidden shadow-lg md:w-44 md:h-64	">
        <Link to="/category/veganas">
          <img src={image1} alt="Mountain" className="md:h-44 md:object-cover" />
          <div className="md:h-20 py-2 md:flex md:flex-col md:items-center md:justify-center bg-gray-300 w-full">
            <p className="text-center hidden md:block uppercase md:text-2xl md:font-medium font-normal text-sm">
              Empanadas
            </p>
            <p className="text-center uppercase md:text-2xl md:font-medium font-normal text-sm">
              Veganas
            </p>
          </div>
        </Link>
      </div>
      <div className="rounded overflow-hidden shadow-lg md:w-44 md:h-64	">
        <Link to="/category/clasicas">
          <img src={image1} alt="Mountain" className="md:h-44 md:object-cover" />
          <div className="md:h-20 py-2 md:flex md:flex-col md:items-center md:justify-center bg-gray-300 w-full">
            <p className="text-center hidden md:block uppercase md:text-2xl md:font-medium font-normal text-sm">
              Empanadas
            </p>
            <p className="text-center uppercase md:text-2xl md:font-medium font-normal text-sm">
              Clásicas 
            </p>
          </div>
        </Link>
      </div>
      {width > 768 && (
        <div className="rounded overflow-hidden shadow-lg md:w-44 md:h-64	">
          <Link to="/nuestros-productos">
            <img src={image1} alt="Mountain" className="md:h-44 md:object-cover" />
            <div className="md:h-20 py-2 md:flex md:flex-col md:items-center md:justify-center bg-gray-300 w-full">
              <p className="text-center hidden md:block uppercase md:text-2xl md:font-medium font-normal text-sm">
                Nuestros
              </p>
              <p className="text-center uppercase md:text-2xl md:font-medium font-normal text-sm">
                Productos
              </p>
            </div>
          </Link>
        </div>
      )}
    </div>
  ) : (
    <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-3 justify-items-center">
      <div className="rounded overflow-hidden shadow-lg">
        <Link to="/nuestros-productos">
          <img src={image1} alt="Mountain" />
          <div className="py-2 bg-gray-300 w-full">
            <p className="text-center font-medium	 text-sm">Masas Caseras</p>
            <p className="text-center font-medium	text-sm">$60</p>
          </div>
        </Link>
      </div>
      <div className="rounded overflow-hidden shadow-lg">
        <Link to="/nuestros-productos">
          <img src={image1} alt="Mountain" />
          <div className="py-2 bg-gray-300 w-full">
            <p className="text-center font-medium	 text-sm">Molde</p>
            <p className="text-center font-medium	 text-sm">$89</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default RowProductCard;
