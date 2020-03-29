import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container, Header } from './styles';

export default function Profile() {
  const { logo } = useContext(ThemeContext);

  const history = useHistory();

  const [incidents, setIncidents] = useState([]);

  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  useEffect(() => {
    async function loadIncidents() {
      try {
        const { data } = await api.get('profile', {
          headers: {
            Authorization: ongId,
          },
        });

        setIncidents(data);
      } catch (error) {
        toast.error(
          'Falha no carregamento de incidentes, tente novamente mais tarde.'
        );
      }
    }

    loadIncidents();
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      toast.error('Erro ao deletar incidente, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="Be The Hero" />

        <span>Bem vindo, {ongName}</span>

        <Link to="incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </Header>
      {incidents.length > 0 ? <h1>Casos cadastrados</h1> : null}

      <ul>
        {incidents.length > 0 ? (
          incidents.map((incident) => (
            <li key={incident.id}>
              <strong>CASO:</strong>
              <p>{incident.title}</p>

              <strong>DESCRIÇÃO:</strong>
              <p>{incident.description}</p>

              <strong>VALOR:</strong>
              <p>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(incident.value)}
              </p>

              <button
                onClick={() => handleDeleteIncident(incident.id)}
                type="button"
              >
                <FiTrash2 size={20} />
              </button>
            </li>
          ))
        ) : (
          <h1>Nenhum caso registrado</h1>
        )}
      </ul>
    </Container>
  );
}
