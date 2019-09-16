import React from 'react';

//import vanita from './Vanita.jpg';

//import vanitaskitchen from './vanitas_kitchen.jpg';
import masala from './masala.jpg';
import vanita from './Vanita.jpg';
import group from './vanitas_kitchen.jpg';
import vanita_says from './images/vanita_says.jpg';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      < Header />
    <div className="monthly_message">
        <img src={vanita_says} alt="Vanita Says" ></img>
        <p>Cooking in the summer can be fun ... bring your daughter, friend, or just yourself for a fun cooking laughing learning experience!

          <a href="mailto:vanitasama@gmail.com?Subject=Send%20Details" target="_top">Email me for details!</a>

        </p>
      </div>
      <div className="group">

        <div className="subgroup">
          <div>
          <img src={group} alt="Vanita Cooking" className="photos"></img>
          </div>
          <div><h3>Title:</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. At ille pellit, qui permulcet sensum voluptate. Sed vos squalidius, illorum vides quam niteat oratio. Longum est enim ad omnia respondere, quae a te dicta sunt. An est aliquid, quod te sua sponte delectet? Aliter enim nosmet ipsos nosse non possumus.</div>
        </div>

        <div className="subgroup">
          <div>
          <img src={masala} alt="Vanita Cooking" className="photos"></img>
          </div>
          <div><h3>Title:</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. At ille pellit, qui permulcet sensum voluptate. Sed vos squalidius, illorum vides quam niteat oratio. Longum est enim ad omnia respondere, quae a te dicta sunt. An est aliquid, quod te sua sponte delectet? Aliter enim nosmet ipsos nosse non possumus.</div>
        </div>

        <div className="subgroup">
          <div>
          <img src={vanita} alt="Vanita Cooking" className="photos"></img>
          </div>
          <div> <h3>Meet Vanita:</h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. At ille pellit, qui permulcet sensum voluptate. Sed vos squalidius, illorum vides quam niteat oratio. Longum est enim ad omnia respondere, quae a te dicta sunt. An est aliquid, quod te sua sponte delectet? Aliter enim nosmet ipsos nosse non possumus.</div>
        </div>
      </div>
  </div>
  );
}

export default App;
