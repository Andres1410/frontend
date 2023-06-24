import walink from "../assests/images/walink.png";

function Whatsapp() {
	return(
		<>
			<div>
       <a href="https://api.whatsapp.com/send?phone=573058513904&text=Hola quiero mas informacion">
         <img className=" bottom-5 left-20px bottom-20 fixed justify-start flex-wrap items-end" src={walink} alt="walink"/>
       </a>
      </div>
		</>
		);
}

export default Whatsapp;
