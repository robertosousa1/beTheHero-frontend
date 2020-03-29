import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';

import { Container, Header } from './styles';

export default function Profile() {
  const { logo } = useContext(ThemeContext);

  const incidents = [
    {
      id: 2,
      title: 'Caso 1',
      description: 'Detalhes do caso',
      value: 120,
      ong_id: '20301baa',
      name: 'APAD',
      email: 'contato@apad.com.br',
      whatsapp: '47000000000',
      city: 'Rio do Sul',
      uf: 'SC',
    },
    {
      id: 3,
      title: 'Caso 2',
      description: 'Detalhes do caso',
      value: 120,
      ong_id: '20301baa',
      name: 'APAD',
      email: 'contato@apad.com.br',
      whatsapp: '47000000000',
      city: 'Rio do Sul',
      uf: 'SC',
    },
  ];

  return (
    <Container>
      <Header>
        <img src={logo} alt="Be The Hero" />

        <span>Bem vindo, ADAP </span>

        <Link to="incidents/new">Cadastrar novo caso</Link>
        <button onClick={() => {}} type="button">
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

              <button onClick={() => {}} type="button">
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
