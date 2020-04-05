import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import './style.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero " />
        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID" />
          <button type="submit" >Entrar</button>
        </form>

        <a href="/register">
          <FiLogIn size={16}  />
          Não tenho cadastro
        </a>
      </section>
      <img src={heroesImg} alt="heroes " />
    </div>
  );
}

export default Logon;
