import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';

import { Container, SectionForm, Button, Form } from './styles';

import HeroesImg from '../../assets/heroes.png';

export default function Logon() {
  const { logo } = useContext(ThemeContext);

  return (
    <Container>
      <SectionForm>
        <img src={logo} alt="Be The Hero" />

        <Form onSubmit={() => {}}>
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID" />
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
