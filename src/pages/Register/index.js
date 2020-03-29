import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';

import {
  Container,
  Content,
  Section,
  InputGroup,
  Button,
  Form,
} from './styles';

export default function Register() {
  const { logo } = useContext(ThemeContext);

  return (
    <Container>
      <Content>
        <Section>
          <img src={logo} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos de sua ONG.
          </p>

          <Link to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Já tenho cadastro
          </Link>
        </Section>
        <Form onSubmit={() => {}}>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />
          <InputGroup>
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </InputGroup>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
