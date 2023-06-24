import { BrowserRouter, Routes, Route } from "react-router-dom";

//subpaginas:
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Olvide from "./pages/Olvide";

// Registro usuario
import Registro from "./pages/Registro";

// Carro de compras
import Cart from "./pages/Cart"

import NuestrosProductos from "./pages/NuestrosProductos";
import Nosotros from "./pages/Nosotros";
import AgregarProducto from "./pages/AgregarProducto";
import EditarProducto from "./pages/EditarProducto";

//Pagina no encontrada:
import Notfound from './pagenotfound/Notfound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Notfound/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/olvide" element={<Olvide />} />
          <Route path="/category/:menuType" element={<Menu />} />
          <Route path="/nuestros-productos" element={<NuestrosProductos />} />
          <Route path="/agregar-producto" element={<AgregarProducto />} />
          <Route path="/editar-producto" element={<EditarProducto />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
