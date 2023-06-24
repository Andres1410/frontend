//Imagen massamia
import Logo from '../assests/images/logo-masa-mia.png'

import { useState } from 'react';

export default function Cart() {

  const initialState = [
    
    { id: 1,stock: 60, nameone: "MECHADA QUESO", amount1: 300, category: "clasicas"},
    { id: 2,stock: 60, nametwo: 'QUESO CHAMPIGNON', amount2:300,}
    

  ];

  const removeshift = () => {
    setFruits((current) =>
      current.filter((fruit) => fruit.id !== 1)
    );
  };

  const removetwo = () => {
    setFruits((current) =>
      current.filter((fruit) => fruit.id !== 2)
    );
  };


  const [fruits, setFruits] = useState(initialState)

    return (
      <>
      <header>
        <div class="flex justify-between ...">
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </div>

        <div class="container mx-auto flex items-center justify-between py-1 ">
          <a href="http://localhost:3000">
            <img src={Logo} alt="Logo Image" className='absolute left-5 top-5 h-16 w-16' />
          </a>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </div>

        {/*Shoping Cart*/}
        <div class="container mx-auto flex items-center justify-between py-5 ">
          <div>
            <p class="font-mono text-2xl">
              Carro de compras 🛒 
            </p>
          </div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </div>
      </header>

      <body>
        <section>
          {/*Productos Agregados al carro de compras*/}
          
          <div style={{ margin: '16px' }}>
            <button onClick={removeshift}  class="outline outline-offset-2 outline-red-500">Eliminar Producto</button>
            {fruits.map((fruit) => (
              <div key={fruit.id}>
                <img src="https://shared.cdn.smp.schibsted.com/v2/images/1afe3b32-fce6-4f62-b55d-b7d59facfe3c?fit=crop&h=660&w=1036&s=330207faefab71facfffe3958ad825738e78b8cf" className='w-40 h-28' alt="" />
                <h2>Producto: {fruit.nameone}</h2>
                <h2>$ {fruit.amount1}</h2>
                <hr />
              </div>
            ))}
          </div>

          <div style={{ margin: '16px' }}>
            <button onClick={removetwo} class="outline outline-offset-2 outline-red-500">
              Eliminar
              </button>
            {fruits.map((fruit) => (
              <div key={fruit.id}>
                <h2>Producto: {fruit.nametwo}</h2>
                <h2>${fruit.amount2}</h2>
                <img src="https://shared.cdn.smp.schibsted.com/v2/images/1afe3b32-fce6-4f62-b55d-b7d59facfe3c?fit=crop&h=660&w=1036&s=330207faefab71facfffe3958ad825738e78b8cf" className='w-40 h-28' alt="" />
                <hr />
              </div>
            ))}
          </div>

          {/*Botones eliminar producto ver precio Total*/}
          <div>
            <button></button>
            <button>Eliminar Productos</button>
          </div>
        </section>

      </body>
</>  
    )
  }

/*aa4e73b44bbc36b2c2ebe84709bb4c6f0ab6eee3*/
