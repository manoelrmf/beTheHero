import React, { useState, useEffect } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './style.css'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

function Profile() {
  const [incidents, setIncidents] = useState([])

  const ongName = localStorage.getItem('ongName')
  const ongID = localStorage.getItem('ongId')

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongID,
      }
    }).then(response => {
      setIncidents(response.data)
    })
  }, [ongID])
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
