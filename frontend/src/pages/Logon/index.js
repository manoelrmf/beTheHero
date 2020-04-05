import React from 'react';
import './style.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

function Logon() {
  return (
   <div className="logon-container">
     <section className="form">
     <img src={logoImg} alt="heroes "/>

     </section>
     <img src={heroesImg} alt="heroes "/>
   </div>
  );
}

export default Logon;
