import React from 'react';

//import businesscard from '../images/businesscard.jpg';
import flower_square from '../images/flower_square.jpg'
import bigv from '../images/bigv.jpg'
import '../App.css';

function Header() {
  return (

<div className="header">
  <div>
    <img src={flower_square} alt="Vanita Cooking" className="photos head_images"></img>
  </div>
 <div className="bold">
   <h1 className="cursive">Vanita's Kitchen</h1>
   <h3 className="cursive">Now catering Indian flavors for 8+</h3>
   <h3>Vanita Sama ~ Cuinary Delighter</h3>
   <p>Berwyn, PA</p>
   <p><a href="mailto:vanitasama@gmail.com" target="_top">vanitasama@gmail.com</a></p>
 </div>

  <div>
    <img src={bigv} alt="Vanita Cooking" className="photos"></img>
  </div>
</div>
);
}
export default Header;


// <div className="bold">
//   <h1 className="cursive">Vanita's Kitchen</h1>
//   <h3 className="cursive">Now catering Indian flavors for 8+</h3>
//   <h3>Vanita Sama ~ Cuinary Delighter</h3>
//   <p>Berwyn, PA</p>
//   <p>E: vanitasama@gmail.com</p>
// </div>
// <div>
//     <img src={bigv} alt="Vanita Cooking" className="photos"></img>
// </div>
// <div>
//   <img src={businesscard} alt="Vanita Cooking" className="photos"></img>
// </div>
