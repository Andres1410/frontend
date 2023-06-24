import paginanoencontrada from "../assests/images/paginanoencontrada.jpg";

// componente navbar
import Navbar from "../components/Navbar";

function Notfound() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center">
        <div>
          <img className=" p-4 border-4 border-none" src={paginanoencontrada} />
        </div>
      </div>
    </>
  );
}

export default Notfound;
