//imagenes bancos:
import visa from "../assests/images/visa.png";
import mastercard from "../assests/images/mastercard.png";
import american from "../assests/images/american.png";
import dinersclub from "../assests/images/dinersclub.png";

// Redes sociales:
import instagram from "../assests/images/instagram.png";
import meta from "../assests/images/meta.png";

//contacto:
import ubicacion from "../assests/images/ubicacion.png";
import telefono from "../assests/images/telefono.png";
import email from "../assests/images/email.png";

//componente watsapp
import Whatsapp from "./Whatsapp";

//logo
import massamiacl from "../assests/images/massamiacl.png";

function footer() {
  return (
    <>

    <footer class="content-center mx-auto py-12 bg-white-200 p-2  ">

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">

    
<div class="mb-5 justify-start flex-wrap	flex items-start">

   <Whatsapp/> 

</div>

<div class="mb-5 inline space-x-1">
<div class=" content-center">
    <blockque class="  absolute relative p-8 content-center ">
            <img class=" w-20 z-0" src={ massamiacl } alt=" massamiacl " />
        </blockque>
</div>

<span class="inline text-center text-2x1 pb-4 text-black-100 font-bold">
      Medios de pago    
  </span>

  <blockquote class="flex space-x-1 static top-50px right-50px left-50px inline-block p-10px">
    <img  src={visa} alt="visa" />

    <img  src={mastercard} alt="mastercard" />

    <img  src={american} alt="american" />
  
    <img  src={dinersclub} alt="dinersclub" />
  </blockquote>            
</div>

<div class="mb-5 inline ">

<div class="space-x-1">
  <p class="inline font-medium text-black-100">nosotros</p>

            <p class="font-bold">Redes Sociales</p>

            <a href="https://www.instagram.com/masamia.cl/">
              <img class="inline w-8" src={instagram} alt="instagram" />
            </a>

            <a href="https://www.facebook.com/masamia.cl">
              <img class=" inline w-8 static" src={meta} alt="meta" />
            </a>   
  </div>

  <div>&nbsp;</div>
            
<div class="space-x-1 flex-initial ">  

  <img class="inline" src={ubicacion} alt="ubicacion" />
  <h1 class="inline" >Temuco,Chile</h1>
</div>
      
<div class="space-x-1 flex-initial">              
  <img class="inline" src={telefono} alt="telefono" />
  <a href="tel:979432938">
    <h1 class="inline">+56 979432938</h1>
  </a>
</div>
  
<div class="space-x-1 flex-initial ">
  <img class="inline" src={email} alt="email" />
  <h1 class="inline">sinaisb1610@gmail.com</h1>
</div>

</div>

</div>
</footer>
  
    </>
  );
}
export default footer;
