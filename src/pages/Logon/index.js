import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { toast } from 'react-toastify';

import { Container, SectionForm, Button, Form } from './styles';

import HeroesImg from '../../assets/heroes.png';

import api from '../../services/api';

export default function Logon() {
  const { logo } = useContext(ThemeContext);

  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const { data } = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', data.name);

      history.push('/profile');
    } catch (error) {
      toast.error('Falha no login, tente novamente.');
    }
  }

  return (
    <Container>
      <SectionForm>
        <img src={logo} alt="Be The Hero" />

        <Form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Button type="submit">Entrar</Button>

          <Link to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </Form>
      </SectionForm>

      <img src={HeroesImg} alt="Heroes" />
    </Container>
  );
}
