import React from 'react';
import '../styles/spinner.css';

const Spinner = () => {
  return (
    <div className="main">
        <div className="row"> <h3 class="msj">Shaping your plan</h3> </div>
        <div className="row">
          <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        <div className="row"> </div>
    </div>
  );
};

export default Spinner;
